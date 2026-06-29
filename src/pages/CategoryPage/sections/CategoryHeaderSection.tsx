import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';

const CATEGORY_LABELS: Record<string, string> = {
  tech: '技术博客',
  art: '艺术创作',
  life: '生活随笔',
};

interface CategoryHeaderSectionProps {
  label: string;
  count: number;
}

export default function CategoryHeaderSection({ label, count }: CategoryHeaderSectionProps) {

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary">
            <FolderOpen className="size-6" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {label}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              共 {count} 篇文章
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
