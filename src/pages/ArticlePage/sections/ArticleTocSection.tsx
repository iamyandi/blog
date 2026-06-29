import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface ArticleTocSectionProps {
  content: string;
}

function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\u4e00-\u9fff]+/g, '-')
      .replace(/(^-|-$)/g, '');
    items.push({ id, text, level });
  }
  return items;
}

export default function ArticleTocSection({ content }: ArticleTocSectionProps) {
  const tocItems = useMemo(() => extractToc(content), [content]);
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (tocItems.length === 0) return;

    const headingElements = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [tocItems]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      setMobileOpen(false);
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <>
      {/* 桌面端固定目录 */}
      <aside className="hidden lg:block sticky top-24 w-56 shrink-0 self-start">
        <nav className="space-y-1">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">
            目录
          </h4>
          <ul className="space-y-0.5 border-l-2 border-border/60">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    'block w-full text-left text-sm py-1.5 transition-colors duration-200 border-l-2 -ml-[2px]',
                    item.level === 3 ? 'pl-6' : 'pl-4',
                    activeId === item.id
                      ? 'border-primary text-primary font-medium'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                  )}
                >
                  <span className="truncate block">{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* 移动端悬浮目录按钮 + Sheet */}
      <div className="lg:hidden fixed bottom-20 right-4 z-40">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              className="h-11 w-11 rounded-full shadow-lg"
              aria-label="目录"
            >
              <List className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <SheetHeader className="px-5 py-4 border-b border-border">
              <SheetTitle className="text-base">文章目录</SheetTitle>
            </SheetHeader>
            <nav className="px-3 py-4 overflow-y-auto max-h-[calc(100vh-120px)]">
              <ul className="space-y-0.5 border-l-2 border-border/60">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleClick(item.id)}
                      className={cn(
                        'block w-full text-left text-sm py-2 transition-colors duration-200 border-l-2 -ml-[2px]',
                        item.level === 3 ? 'pl-6' : 'pl-4',
                        activeId === item.id
                          ? 'border-primary text-primary font-medium'
                          : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                      )}
                    >
                      <span className="truncate block">{item.text}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
