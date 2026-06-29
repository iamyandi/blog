import { useMemo } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import ArticleListSection from './sections/ArticleListSection';
import TagCloudSection from './sections/TagCloudSection';
import { MOCK_ARTICLES } from '@/data/articles';

export default function HomePage() {
  const latestArticles = useMemo(
    () => [...MOCK_ARTICLES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5),
    [],
  );

  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-12 md:space-y-16">
        {/* Hero */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroSection />
            </motion.div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ArticleListSection articles={latestArticles} />
            </motion.div>
          </div>
        </section>

        {/* Tag Cloud */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <TagCloudSection />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
