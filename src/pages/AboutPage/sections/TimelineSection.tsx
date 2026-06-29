import { memo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Palette } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { MOCK_PROFILE } from '@/data/profile';

const timelineIcons: Record<number, typeof Calendar> = {
  0: Calendar,
  1: Briefcase,
  2: Palette,
};

export default memo(function TimelineSection() {
  const { timeline, timelineImageUrl } = MOCK_PROFILE;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            个人履历
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            从陶瓷艺术到后端开发，跨界成长的旅程
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* 左侧图片 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-sm">
              <Image
                src={timelineImageUrl}
                alt="个人履历"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* 右侧时间轴 */}
          <div className="lg:col-span-3">
            <div className="relative pl-8 border-l-2 border-primary/20 space-y-10">
              {timeline.map((item, index) => {
                const Icon = timelineIcons[index] || Calendar;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative"
                  >
                    {/* 时间轴圆点 */}
                    <div className="absolute -left-[calc(2rem+9px)] top-1 flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground shadow-sm">
                      <Icon className="size-4" />
                    </div>

                    {/* 内容卡片 */}
                    <div className="p-5 rounded-xl border border-border/50 bg-card/60 hover:bg-card hover:shadow-sm transition-all duration-300">
                      <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wide text-primary bg-primary/10 rounded-full">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
