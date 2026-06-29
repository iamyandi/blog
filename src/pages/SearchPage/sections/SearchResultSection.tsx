import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SearchX, Calendar, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import type { IArticle } from '@/data/articles';

interface SearchResultSectionProps {
  keyword: string;
  results: IArticle[];
}

const CATEGORY_LABELS: Record<string, string> = {
  tech: '技术博客',
  art: '艺术创作',
  life: '生活随笔',
};

export default function SearchResultSection({ keyword, results }: SearchResultSectionProps) {
  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-6 rounded-full bg-muted p-6">
          <SearchX className="size-10 text-muted-foreground" />
        </div>
        <h2 className="mb-2 text-xl font-semibold text-foreground">
          未找到相关文章
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">
          没有找到与「<span className="font-medium text-foreground">{keyword}</span>」相关的文章，请尝试更换关键词搜索。
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        找到 <span className="font-medium text-foreground">{results.length}</span> 篇与「
        <span className="font-medium text-foreground">{keyword}</span>」相关的文章
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to={`/article/${article.id}`} className="group block">
              <Card className="overflow-hidden border border-border/60 bg-card transition-shadow duration-300 group-hover:shadow-md">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-3 p-5">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {CATEGORY_LABELS[article.category] ?? article.category}
                    </Badge>
                  </div>

                  <h3 className="line-clamp-2 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>

                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="size-3" />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" />
                      {article.readTime} 分钟
                    </span>
                  </div>

                  {article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-md border border-border/50 bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          <Tag className="size-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
