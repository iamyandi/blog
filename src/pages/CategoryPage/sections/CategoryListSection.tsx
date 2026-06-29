import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Badge } from '@/components/ui/badge';
import type { IArticle } from '@/data/articles';

interface CategoryListSectionProps {
  articles: IArticle[];
}

const CATEGORY_BADGE_VARIANTS: Record<IArticle['category'], 'default' | 'secondary' | 'outline'> = {
  tech: 'default',
  art: 'secondary',
  life: 'outline',
};

const CATEGORY_LABELS: Record<IArticle['category'], string> = {
  tech: '技术博客',
  art: '艺术创作',
  life: '生活随笔',
};

export default memo(function CategoryListSection({ articles }: CategoryListSectionProps) {
  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 text-6xl">📭</div>
        <h3 className="text-lg font-semibold text-foreground">暂无文章</h3>
        <p className="mt-2 text-sm text-muted-foreground">该分类下还没有发布文章，敬请期待。</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, i) => (
        <motion.article
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <Link
            to={`/article/${article.id}`}
            className="group block overflow-hidden rounded-xl border border-border/60 bg-card shadow-xs transition-shadow hover:shadow-md"
          >
            {/* 封面图 */}
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={article.imageUrl}
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              {/* 分类标签 - 图片左下角 */}
              <Badge
                variant={CATEGORY_BADGE_VARIANTS[article.category]}
                className="!absolute bottom-3 left-3 z-20 text-xs"
              >
                {CATEGORY_LABELS[article.category]}
              </Badge>
            </div>

            {/* 内容区 */}
            <div className="flex flex-col gap-3 p-5">
              {/* 标题 */}
              <h3 className="line-clamp-2 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                {article.title}
              </h3>

              {/* 摘要 */}
              <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {article.summary}
              </p>

              {/* 标签 */}
              <div className="flex flex-wrap items-center gap-1.5">
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border border-border/50 bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    <Tag className="mr-1 size-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* 底部元信息 */}
              <div className="flex items-center justify-between border-t border-border/40 pt-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="size-3.5" />
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {article.readTime} 分钟阅读
                </span>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
});
