import { memo } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Sparkles } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { MOCK_PROFILE } from '@/data/profile';

const CATEGORY_ICONS: Record<string, typeof Code> = {
  '技术栈': Code,
  '艺术技能': Palette,
};

const CATEGORY_COLORS: Record<string, string> = {
  '技术栈': 'bg-primary/10 text-primary border-primary/20',
  '艺术技能': 'bg-accent/10 text-accent-foreground border-accent/20',
};

const SKILL_LEVELS: Record<string, number> = {
  'Java后端': 95,
  'Spring Boot': 92,
  'Linux运维': 80,
  'Python自动化': 75,
  'Docker': 82,
  'MySQL': 88,
  '陶瓷设计': 90,
  '绘画': 85,
  '插画': 80,
  '素描教学': 88,
};

function SkillsSection() {
  const { skills, skillsImageUrl } = MOCK_PROFILE;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="size-4" />
            技能树
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            技术与艺术的双重修炼
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            六年 Java 后端开发经验，兼具陶瓷艺术设计专业背景。代码与画笔，理性与感性，共同塑造了独特的我。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* 左侧：技能分组 */}
          <div className="lg:col-span-3 space-y-8">
            {skills.map((group, gi) => {
              const Icon = CATEGORY_ICONS[group.category] || Code;
              const colorClass = CATEGORY_COLORS[group.category] || 'bg-muted text-muted-foreground border-border';

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: gi * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="border-border/60 shadow-sm">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center size-10 rounded-lg ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]}`}>
                          <Icon className="size-5" />
                        </div>
                        <CardTitle className="text-lg">{group.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {group.items.map((skill, si) => {
                        const level = SKILL_LEVELS[skill] ?? 70;
                        return (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: gi * 0.12 + si * 0.06, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-1.5"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-foreground">{skill}</span>
                              <span className="text-xs text-muted-foreground tabular-nums">{level}%</span>
                            </div>
                            <Progress value={level} className="h-2" />
                          </motion.div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* 右侧：配图 + 标签云 */}
          <motion.div
            className="lg:col-span-2 space-y-6 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="border-border/60 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src={skillsImageUrl}
                  alt="技能展示"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <CardContent className="pt-5">
                <h3 className="text-sm font-semibold text-foreground mb-3">全部技能标签</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.flatMap(g => g.items).map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1 text-xs font-normal cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 亮点卡片 */}
            <Card className="border-border/60 shadow-sm bg-primary/5">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">跨领域融合</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      技术与艺术的跨界背景，让我在系统架构设计时更注重用户体验与视觉美感，在艺术创作时融入逻辑思维与结构化方法。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(SkillsSection);
