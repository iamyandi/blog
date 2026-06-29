import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchResultSection from './sections/SearchResultSection';
import { MOCK_ARTICLES } from '@/data/articles';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!keyword.trim()) return [];
    const lower = keyword.toLowerCase();
    return MOCK_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(lower) ||
        a.summary.toLowerCase().includes(lower) ||
        a.tags.some((t) => t.toLowerCase().includes(lower)),
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [keyword]);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-8">
        <section className="w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              搜索结果
              {keyword && (
                <span className="text-muted-foreground font-normal text-lg ml-2">
                  「{keyword}」
                </span>
              )}
            </h1>
          </div>
        </section>

        <section className="w-full">
          <div className="max-w-7xl mx-auto">
            <SearchResultSection keyword={keyword} results={results} />
          </div>
        </section>
      </main>
    </div>
  );
}
