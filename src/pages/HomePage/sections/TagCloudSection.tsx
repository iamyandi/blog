import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

import { MOCK_ARTICLES } from '@/data/articles';

interface TagCount {
  name: string;
  count: number;
}

export default function TagCloudSection() {
  const navigate = useNavigate();

  const tags = useMemo<TagCount[]>(() => {
    const map = new Map<string, number>();
    MOCK_ARTICLES.forEach((article) => {
      article.tags.forEach((tag) => {
        map.set(tag, (map.get(tag) || 0) + 1);
      });
    });
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const maxCount = tags.length > 0 ? tags[0].count : 1;

  const getSizeClass = (count: number): string => {
    const ratio = count / maxCount;
    if (ratio >= 0.8) return 'text-sm px-4 py-2';
    if (ratio >= 0.5) return 'text-xs px-3 py-1.5';
    return 'text-xs px-2.5 py-1';
  };

  const handleTagClick = (tagName: string) => {
    navigate(`/search?q=${encodeURIComponent(tagName)}`);
  };

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 mb-6">
          <Tag className="size-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">技术标签云</h2>
        </div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {tags.map((tag) => (
            <motion.button
              key={tag.name}
              type="button"
              onClick={() => handleTagClick(tag.name)}
              className={`rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer ${getSizeClass(tag.count)}`}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
              title={`${tag.name}（${tag.count} 篇）`}
            >
              {tag.name}
              <span className="ml-1 opacity-60">{tag.count}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
