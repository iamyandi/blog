import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IArticle } from '@/data/articles';

interface ArticleListSectionProps {
  articles: IArticle[];
}

const CATEGORY_LABELS: Record<string, string> = {
  tech: '技术博客',
  art: '艺术创作',
  life: '生活随笔',
};

const CATEGORY_VARIANTS: Record<string, 'default' | 'secondary' | 'outline'> = {
  tech: 'default',
  art: 'secondary',
  life: 'outline',
};

export default memo(function ArticleListSection({ articles }: ArticleListSectionProps) {
  if (articles.length === 0) {
    return (
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">暂无文章</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              最新文章
            </h2>
            <p className="mt-2 text-muted-foreground">
              记录技术、艺术与生活的点滴
            </p>
          </div>
          <Link to="/archive">
            <Button variant="ghost" className="group text-muted-foreground hover:text-foreground">
              查看全部
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/article/${article.id}`} className="block group/card">
                <Card className="overflow-hidden border border-border/60 bg-card transition-shadow duration-300 hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
                    <Badge
                      variant={CATEGORY_VARIANTS[article.category] ?? 'default'}
                      className="!absolute left-3 top-3 z-20 text-xs"
                    >
                      {CATEGORY_LABELS[article.category] ?? article.category}
                    </Badge>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-semibold text-foreground leading-snug line-clamp-2 group-hover/card:text-primary transition-colors duration-200">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />
                        {article.readTime} 分钟
                      </span>
                    </div>

                    {article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
