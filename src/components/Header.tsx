import { useState, useCallback, type FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  path: string;
  icon: typeof Home;
}

import { Home, Code, Palette, Coffee, Archive, User } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { label: '首页', path: '/', icon: Home },
  { label: '技术博客', path: '/category/tech', icon: Code },
  { label: '艺术创作', path: '/category/art', icon: Palette },
  { label: '生活随笔', path: '/category/life', icon: Coffee },
  { label: '归档', path: '/archive', icon: Archive },
  { label: '关于我', path: '/about', icon: User },
];

function getTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('__blog_theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: 'light' | 'dark') {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('__blog_theme', theme);
}

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getTheme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      applyTheme(next);
      return next;
    });
  }, []);

  const handleSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const trimmed = searchKeyword.trim();
      if (!trimmed) return;
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
      setSearchKeyword('');
      setMobileMenuOpen(false);
    },
    [searchKeyword, navigate],
  );

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 shrink-0"
          onClick={closeMobileMenu}
        >
          <span className="text-xl font-bold tracking-tight text-foreground">
            Aaron
          </span>
          <span className="hidden sm:inline text-xs text-muted-foreground font-mono tracking-wider">
            BLOG
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'text-primary bg-accent/60'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/40',
                  )
                }
              >
                <Icon className="size-4" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Right: Search + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-2">
          <form onSubmit={handleSearch} className="relative w-48">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="搜索文章..."
              className="bg-background pl-9 h-9 text-sm"
            />
          </form>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? '切换深色模式' : '切换浅色模式'}
            className="h-9 w-9"
          >
            {theme === 'light' ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </Button>
        </div>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="flex lg:hidden items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? '切换深色模式' : '切换浅色模式'}
            className="h-9 w-9"
          >
            {theme === 'light' ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
            className="h-9 w-9"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/30 bg-background/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="搜索文章..."
                className="bg-background pl-9 h-10 text-sm"
              />
            </form>

            {/* Mobile Nav Items */}
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                        isActive
                          ? 'text-primary bg-accent/60'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/40',
                      )
                    }
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
