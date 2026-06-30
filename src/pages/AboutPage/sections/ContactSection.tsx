import { memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, MapPin, Heart, Dumbbell, PenLine, TrendingUp, Baby } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { MOCK_PROFILE } from '@/data/profile';


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hobbyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  '健身减脂': Dumbbell,
  '网文创作': PenLine,
  '金融投资': TrendingUp,
};

function ContactSection() {
  const { contact, hobbies, family } = MOCK_PROFILE;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      toast.success('邮箱地址已复制');
    } catch {
      toast.error('复制失败，请手动复制');
    }
  };

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* 联系方式 */}
          <motion.div variants={item}>
            <Card className="h-full border-border/50 bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Mail className="size-5 text-primary" />
                  联系方式
                </CardTitle>
                <CardDescription>欢迎技术交流与合作</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Mail className="size-5 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">邮箱</p>
                    <p className="text-sm font-medium truncate">{contact.email}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleCopyEmail}>
                    复制
                  </Button>
                </div>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <Github className="size-5 text-muted-foreground shrink-0 group-hover:text-foreground transition-colors" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                      {contact.github.replace('https://', '')}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <MapPin className="size-5 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">所在地</p>
                    <p className="text-sm font-medium">{contact.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 个人生活 */}
          <motion.div variants={item}>
            <Card className="h-full border-border/50 bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="size-5 text-primary" />
                  个人生活
                </CardTitle>
                <CardDescription>代码之外的另一面</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* 爱好 */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                    兴趣爱好
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {hobbies.map((hobby) => {
                      const Icon = hobbyIcons[hobby];
                      return (
                        <Badge
                          key={hobby}
                          variant="secondary"
                          className="px-3 py-1.5 text-sm gap-1.5"
                        >
                          {Icon && <Icon className="size-3.5" />}
                          {hobby}
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                {/* 家庭 */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                    家庭
                  </p>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Baby className="size-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">
                        女儿 · {family.daughter}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        出生于 {family.daughterBirth}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 一句话 */}
                <div className="pt-2 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "代码构建世界，画笔描绘生活。在技术与艺术之间寻找平衡，做一个有趣的人。"
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(ContactSection);
