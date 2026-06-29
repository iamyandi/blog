import { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

interface ArticleContentSectionProps {
  content: string;
}

function CodeBlock({ language, value }: { language: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success('代码已复制');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('复制失败');
    }
  }, [value]);

  return (
    <div className="group relative my-6 rounded-lg border border-border/60 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border/40">
        <span className="text-xs font-mono text-muted-foreground">
          {language || 'code'}
        </span>
        <Button
          size="sm"
          variant="ghost"
          className="h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          onClick={handleCopy}
          type="button"
        >
          {copied ? (
            <Check className="size-3.5 text-success" />
          ) : (
            <Copy className="size-3.5" />
          )}
          {copied ? '已复制' : '复制'}
        </Button>
      </div>
      <SyntaxHighlighter
        language={language || 'text'}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          padding: '1rem',
          fontSize: '0.875rem',
          lineHeight: '1.6',
        }}
        showLineNumbers
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
}

export default function ArticleContentSection({ content }: ArticleContentSectionProps) {
  return (
    <article className="prose prose-slate max-w-none dark:prose-invert
      prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:text-foreground
      prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/50
      prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:my-4
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-strong:text-foreground prose-strong:font-semibold
      prose-code:bg-muted prose-code:text-foreground/90 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
      prose-pre:p-0 prose-pre:bg-transparent prose-pre:border-0
      prose-img:rounded-xl prose-img:shadow-md
      prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
      prose-li:text-foreground/85 prose-li:my-1
      prose-hr:border-border/40
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const codeString = String(children).replace(/\n$/, '');

            if (match) {
              return (
                <CodeBlock language={match[1]} value={codeString} />
              );
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          pre({ children }) {
            return <>{children}</>;
          },
          table({ children }) {
            return (
              <div className="my-6 w-full overflow-x-auto rounded-lg border border-border/60">
                <table className="min-w-full text-sm">{children}</table>
              </div>
            );
          },
          th({ children }) {
            return (
              <th className="border-b border-border/40 bg-muted/30 px-4 py-2.5 text-left font-semibold text-foreground">
                {children}
              </th>
            );
          },
          td({ children }) {
            return (
              <td className="border-b border-border/20 px-4 py-2 text-foreground/85">
                {children}
              </td>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
