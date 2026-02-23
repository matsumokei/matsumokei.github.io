import Link from 'next/link';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import type { PostMeta } from '@/types';

interface PostCardProps {
  post: PostMeta & { readingTime?: string };
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = format(new Date(post.date), 'yyyy年M月d日', { locale: ja });

  return (
    <article className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-5 mb-5 hover:shadow-lg hover:scale-[1.01] transition-all">
      <Link href={`/blog/${post.slug}`} className="block group">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors">
          {post.title}
        </h2>
      </Link>
      
      {post.description && (
        <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed">
          {post.description}
        </p>
      )}
      
      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500 mb-3">
        <time dateTime={post.date}>{formattedDate}</time>
        {post.readingTime && (
          <>
            <span>•</span>
            <span>{post.readingTime}</span>
          </>
        )}
      </div>
      
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="text-xs px-3 py-1.5 bg-gradient-to-r from-blue-50/70 to-purple-50/70 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 hover:from-blue-100/80 hover:to-purple-100/80 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 rounded-full font-medium transition-all backdrop-blur-sm"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
