import { motion } from 'framer-motion';
import TimelineSection from './sections/TimelineSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import { MOCK_PROFILE } from '@/data/profile';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-12 md:space-y-16">
        {/* Hero Banner */}
        <section className="w-full bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                关于我
              </h1>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                {MOCK_PROFILE.bio}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <TimelineSection timeline={MOCK_PROFILE.timeline} timelineImageUrl={MOCK_PROFILE.timelineImageUrl} />
          </div>
        </section>

        {/* Skills */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <SkillsSection skills={MOCK_PROFILE.skills} skillsImageUrl={MOCK_PROFILE.skillsImageUrl} />
          </div>
        </section>

        {/* Contact */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ContactSection
              contact={MOCK_PROFILE.contact}
              hobbies={MOCK_PROFILE.hobbies}
              family={MOCK_PROFILE.family}
              location={MOCK_PROFILE.location}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
