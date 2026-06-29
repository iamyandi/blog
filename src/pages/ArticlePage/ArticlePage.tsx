import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_ARTICLES } from '@/data/articles';
import ArticleMetaSection from './sections/ArticleMetaSection';
import ArticleContentSection from './sections/ArticleContentSection';
import ArticleTocSection from './sections/ArticleTocSection';
import CommentSection from './sections/CommentSection';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = MOCK_ARTICLES.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-3xl mx-auto px-4 md:px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">文章不存在</h1>
          <p className="text-muted-foreground mb-6">未找到该文章，可能已被删除或链接失效。</p>
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft className="size-4 mr-2" />
            返回首页
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* 返回按钮 */}
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4 mr-1.5" />
            返回
          </Button>
        </div>

        {/* 文章元信息 */}
        <ArticleMetaSection article={article} />

        {/* 桌面端：主从布局（正文 + 目录） */}
        <div className="mt-8 flex gap-10">
          {/* 正文区 */}
          <div className="flex-1 min-w-0">
            <ArticleContentSection content={article.content} />
            {/* 评论区 */}
            <div className="mt-12">
              <CommentSection articleId={article.id} />
            </div>
          </div>

          {/* 桌面端目录 */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24">
              <ArticleTocSection content={article.content} />
            </div>
          </aside>
        </div>

        {/* 移动端目录（悬浮按钮） */}
        <div className="lg:hidden fixed bottom-20 right-4 z-40">
          <ArticleTocSection content={article.content} mobile />
        </div>
      </main>
    </div>
  );
}
