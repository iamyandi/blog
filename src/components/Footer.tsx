import { Github } from 'lucide-react';
import { MOCK_PROFILE } from '@/data/profile';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* 版权信息 */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {MOCK_PROFILE.name}. All rights reserved.
          </p>

          {/* 社交链接 */}
          <div className="flex items-center gap-4">
            <UniversalLink
              to={MOCK_PROFILE.contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="size-4" />
              <span>GitHub</span>
            </UniversalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
