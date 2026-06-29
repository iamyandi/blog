import { Calendar, Clock, Tag, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { IArticle } from '@/data/articles';

interface ArticleMetaSectionProps {
  article: IArticle;
}

const CATEGORY_LABELS: Record<IArticle['category'], string> = {
  tech: '技术博客',
  art: '艺术创作',
  life: '生活随笔',
};

export default function ArticleMetaSection({ article }: ArticleMetaSectionProps) {
  return (
    <section className="w-full py-10 md:py-14">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* 分类标签 */}
        <div className="mb-4">
          <Badge variant="secondary" className="text-xs font-medium">
            {CATEGORY_LABELS[article.category]}
          </Badge>
        </div>

        {/* 文章标题 */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight mb-6">
          {article.title}
        </h1>

        {/* 摘要 */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
          {article.summary}
        </p>

        {/* 元信息行 */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground">
          {/* 作者 */}
          <div className="flex items-center gap-2">
            <Avatar className="size-7">
              <AvatarImage src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_rhys/ljhwZthlaukjlkulzlp/feisuda/avatar/base/1.jpg" alt="闫珶" />
              <AvatarFallback>闫</AvatarFallback>
            </Avatar>
            <span className="font-medium text-foreground">闫珶</span>
          </div>

          {/* 分隔 */}
          <span className="hidden sm:inline text-border">|</span>

          {/* 发布日期 */}
          <div className="flex items-center gap-1.5">
            <Calendar className="size-4 shrink-0" />
            <span>{article.date}</span>
          </div>

          {/* 分隔 */}
          <span className="hidden sm:inline text-border">|</span>

          {/* 阅读时长 */}
          <div className="flex items-center gap-1.5">
            <Clock className="size-4 shrink-0" />
            <span>{article.readTime} 分钟阅读</span>
          </div>
        </div>

        {/* 标签行 */}
        {article.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <Tag className="size-4 text-muted-foreground shrink-0" />
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
