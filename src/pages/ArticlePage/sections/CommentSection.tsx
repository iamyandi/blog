import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, User } from 'lucide-react';
import { toast } from 'sonner';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IComment, MOCK_COMMENTS } from '@/data/comments';

interface CommentSectionProps {
  articleId: string;
}

export default function CommentSection({ articleId }: CommentSectionProps) {
  const [comments, setComments] = useState<IComment[]>(() =>
    MOCK_COMMENTS.filter((c) => c.articleId === articleId)
  );
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) {
      toast.error('请填写昵称和评论内容');
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    const newComment: IComment = {
      id: String(Date.now()),
      articleId,
      author: author.trim(),
      avatarUrl: '',
      content: content.trim(),
      createdAt: new Date().toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setComments((prev) => [newComment, ...prev]);
    setAuthor('');
    setContent('');
    setSubmitting(false);
    toast.success('评论已提交');
  };

  return (
    <section className="w-full py-12">
      <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-8">
        {/* 评论列表 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <MessageSquare className="size-5 text-primary" />
              评论 ({comments.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {comments.length === 0 ? (
              <p className="text-center text-muted-foreground py-8 text-sm">
                暂无评论，来抢沙发吧
              </p>
            ) : (
              comments.map((comment, i) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-3"
                >
                  <Avatar className="size-9 shrink-0">
                    <AvatarImage src={comment.avatarUrl} alt={comment.author} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      {comment.author.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-foreground">
                        {comment.author}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {comment.createdAt}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-foreground/85 leading-relaxed whitespace-pre-line">
                      {comment.content}
                    </p>
                  </div>
                </motion.div>
              ))
            )}
          </CardContent>
        </Card>

        {/* 评论提交表单 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Send className="size-5 text-primary" />
              发表评论
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="你的昵称"
                  className="pl-9"
                  maxLength={20}
                />
              </div>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="写下你的想法..."
                rows={4}
                maxLength={500}
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {content.length}/500
                </span>
                <Button type="submit" disabled={submitting} size="sm">
                  {submitting ? '提交中...' : '发表评论'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
