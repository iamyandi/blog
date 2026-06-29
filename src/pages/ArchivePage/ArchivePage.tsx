import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { MOCK_ARTICLES, type IArticle } from '@/data/articles';
import { Image } from '@/components/ui/image';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

function groupByYear(articles: IArticle[]): Map<number, IArticle[]> {
  const map = new Map<number, IArticle[]>();
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  for (const article of sorted) {
    const year = new Date(article.date).getFullYear();
    const list = map.get(year) || [];
    list.push(article);
    map.set(year, list);
  }
  return map;
}

const CATEGORY_LABELS: Record<string, string> = {
  tech: '技术',
  art: '艺术',
  life: '生活',
};

export default function ArchivePage() {
  const yearGroups = useMemo(() => groupByYear(MOCK_ARTICLES), []);
  const years = useMemo(() => [...yearGroups.keys()].sort((a, b) => b - a), [yearGroups]);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-12">
        {/* 页面标题 */}
        <section className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-3"
          >
            <div className="inline-flex items-center gap-2 text-primary">
              <CalendarDays className="size-5" />
              <span className="text-sm font-medium tracking-wider uppercase">Archive</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              文章归档
            </h1>
            <p className="text-muted-foreground text-sm">
              共 {MOCK_ARTICLES.length} 篇文章，按时间线浏览
            </p>
          </motion.div>
        </section>

        {/* 年份快速跳转 */}
        {years.length > 1 && (
          <section className="w-full">
            <div className="flex flex-wrap justify-center gap-2">
              {years.map((year) => (
                <UniversalLink
                  key={year}
                  to={`#year-${year}`}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {year}
                </UniversalLink>
              ))}
            </div>
          </section>
        )}

        {/* 时间轴 */}
        <section className="w-full space-y-12">
          {years.map((year) => {
            const articles = yearGroups.get(year) || [];
            return (
              <div key={year} id={`year-${year}`}>
                {/* 年份标题 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4 mb-6"
                >
                  <span className="text-4xl font-black text-primary/20 tabular-nums">
                    {year}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground shrink-0">
                    {articles.length} 篇
                  </span>
                </motion.div>

                {/* 文章列表 */}
                <div className="space-y-4">
                  {articles.map((article, i) => (
                    <motion.a
                      key={article.id}
                      href={`/article/${article.id}`}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ y: -2 }}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-border/40 bg-card/50 hover:bg-card hover:border-border hover:shadow-sm transition-all"
                    >
                      {/* 日期 */}
                      <div className="shrink-0 text-center w-14">
                        <div className="text-xs text-muted-foreground">
                          {new Date(article.date).toLocaleDateString('zh-CN', {
                            month: 'short',
                          })}
                        </div>
                        <div className="text-lg font-bold text-foreground tabular-nums">
                          {new Date(article.date).getDate()}
                        </div>
                      </div>

                      {/* 缩略图 */}
                      <div className="shrink-0 w-16 h-12 rounded-lg overflow-hidden bg-muted hidden sm:block">
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* 标题 + 分类 */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs px-1.5 py-0.5 rounded bg-accent/60 text-accent-foreground">
                            {CATEGORY_LABELS[article.category] || article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {article.readTime} 分钟阅读
                          </span>
                        </div>
                      </div>

                      {/* 箭头 */}
                      <div className="shrink-0 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                        <svg
                          className="size-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
