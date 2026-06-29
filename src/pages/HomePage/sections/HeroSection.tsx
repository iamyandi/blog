import { motion } from 'framer-motion';
import { MapPin, Calendar, Code, Palette, PenLine } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Badge } from '@/components/ui/badge';
import { MOCK_PROFILE } from '@/data/profile';

export default function HeroSection() {
  const profile = MOCK_PROFILE;

  const identityTags = [
    { icon: Code, label: 'Java 后端开发', color: 'bg-primary/10 text-primary border-primary/20' },
    { icon: Palette, label: '陶瓷艺术设计', color: 'bg-accent text-accent-foreground border-accent' },
    { icon: PenLine, label: '画家 / 插画师', color: 'bg-secondary text-secondary-foreground border-secondary' },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* 左侧：头像 + 身份标签 */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="size-40 md:size-48 rounded-2xl overflow-hidden border-2 border-border/60 shadow-lg">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="size-full object-cover"
                />
              </div>
              {/* 装饰圆环 */}
              <div className="absolute -inset-3 rounded-2xl border border-primary/20 -z-10" />
              <div className="absolute -inset-6 rounded-2xl border border-dashed border-primary/10 -z-10" />
            </div>

            {/* 身份标签 */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {identityTags.map((tag) => {
                const Icon = tag.icon;
                return (
                  <Badge
                    key={tag.label}
                    variant="outline"
                    className={`gap-1.5 px-3 py-1.5 text-xs font-medium ${tag.color}`}
                  >
                    <Icon className="size-3" />
                    {tag.label}
                  </Badge>
                );
              })}
            </div>
          </motion.div>

          {/* 右侧：文字信息 */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {/* 姓名 + 年份 */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  {profile.name}
                </h1>
                <span className="text-lg md:text-xl text-muted-foreground font-mono">
                  {profile.birthYear}
                </span>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {profile.tagline}
              </p>
            </div>

            {/* 简介 */}
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
              {profile.bio}
            </p>

            {/* 所在地 + 爱好 */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="size-4 text-primary" />
                <span>{profile.location}</span>
              </div>
              <span className="text-border">|</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="size-4 text-primary" />
                <span>6 年开发经验</span>
              </div>
            </div>

            {/* 爱好标签 */}
            <div className="flex flex-wrap gap-2">
              {profile.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/50"
                >
                  {hobby}
                </span>
              ))}
            </div>

            {/* 家庭信息 */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/5 border border-primary/10 text-sm">
              <span className="text-muted-foreground">👨‍👩‍👧 女儿</span>
              <span className="font-semibold text-foreground">{profile.family.daughter}</span>
              <span className="text-muted-foreground text-xs">{profile.family.daughterBirth}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
