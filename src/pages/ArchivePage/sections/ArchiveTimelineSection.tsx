import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { IArticle, MOCK_ARTICLES } from '@/data/articles';

const CATEGORY_LABELS: Record<IArticle['category'], string> = {
  tech: '技术博客',
  art: '艺术创作',
  life: '生活随笔',
};

const CATEGORY_VARIANTS: Record<IArticle['category'], 'default' | 'secondary' | 'outline'> = {
  tech: 'default',
  art: 'secondary',
  life: 'outline',
};

interface YearGroup {
  year: string;
  articles: IArticle[];
}

export default function ArchiveTimelineSection() {
  const yearGroups = useMemo<YearGroup[]>(() => {
    const sorted = [...MOCK_ARTICLES].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const map = new Map<string, IArticle[]>();
    for (const article of sorted) {
      const year = article.date.slice(0, 4);
      if (!map.has(year)) map.set(year, []);
      map.get(year)!.push(article);
    }

    return Array.from(map.entries()).map(([year, articles]) => ({ year, articles }));
  }, []);

  if (yearGroups.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
        <Calendar className="size-12 mb-4 opacity-30" />
        <p className="text-lg">暂无归档文章</p>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {yearGroups.map((group, gi) => (
        <motion.div
          key={group.year}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 年份标题 */}
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              {group.year}
            </h2>
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground shrink-0">
              {group.articles.length} 篇
            </span>
          </div>

          {/* 时间轴 */}
          <div className="relative pl-8 md:pl-10">
            {/* 竖线 */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {group.articles.map((article, ai) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    delay: ai * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  {/* 时间轴圆点 */}
                  <div className="absolute -left-[calc(2rem+4px)] md:-left-[calc(2.5rem+4px)] top-2 size-3 rounded-full border-2 border-primary bg-background ring-4 ring-background" />

                  {/* 日期标签 */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="size-3.5" />
                    <span>{article.date}</span>
                    <span className="mx-1">·</span>
                    <Clock className="size-3.5" />
                    <span>{article.readTime} 分钟阅读</span>
                  </div>

                  {/* 文章卡片 */}
                  <Link
                    to={`/article/${article.id}`}
                    className="group block rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {article.summary}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Badge variant={CATEGORY_VARIANTS[article.category]} className="text-xs">
                          {CATEGORY_LABELS[article.category]}
                        </Badge>
                        <ArrowRight className="size-4 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      </div>
                    </div>

                    {/* 标签 */}
                    {article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
