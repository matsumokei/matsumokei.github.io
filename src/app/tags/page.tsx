import Link from 'next/link';
import { getAllTags, getAllPosts } from '@/lib/utils/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'タグ一覧',
  description: 'ブログ記事のタグ一覧',
  openGraph: {
    title: 'タグ一覧',
    description: 'ブログ記事のタグ一覧',
  },
};

export default function TagsPage() {
  const tags = getAllTags();
  const posts = getAllPosts();
  
  const tagCounts = tags.map((tag) => ({
    tag,
    count: posts.filter(post => post.tags?.includes(tag)).length,
  }));

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 pb-4 border-b-2 border-blue-100/50 dark:border-blue-900/30">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          タグ一覧
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {tags.length}個のタグ
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {tagCounts.map(({ tag, count }) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="p-4 bg-gradient-to-br from-blue-50/60 to-purple-50/60 dark:from-blue-900/15 dark:to-purple-900/15 backdrop-blur-md rounded-lg hover:shadow-lg hover:scale-105 transition-all"
          >
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              #{tag}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {count}件
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
