import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { IArticle, MOCK_ARTICLES } from '@/data/articles';
import CategoryHeaderSection from './sections/CategoryHeaderSection';
import CategoryListSection from './sections/CategoryListSection';

const CATEGORY_MAP: Record<string, { label: string }> = {
  tech: { label: '技术博客' },
  art: { label: '艺术创作' },
  life: { label: '生活随笔' },
};

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();

  const categoryInfo = slug ? CATEGORY_MAP[slug] : undefined;

  const articles: IArticle[] = useMemo(() => {
    if (!slug) return [];
    return MOCK_ARTICLES.filter((a) => a.category === slug).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }, [slug]);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-10">
        <CategoryHeaderSection
          label={categoryInfo?.label ?? '未知分类'}
          count={articles.length}
        />
        <CategoryListSection articles={articles} />
      </main>
    </div>
  );
}
