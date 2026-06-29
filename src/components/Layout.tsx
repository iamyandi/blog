import { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Moon, Sun, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function Layout() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('__blog_theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('__blog_theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowBackTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <Footer />

      {showBackTop && (
        <Button
          size="icon"
          variant="secondary"
          className="!fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full shadow-md"
          onClick={scrollToTop}
          aria-label="返回顶部"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
