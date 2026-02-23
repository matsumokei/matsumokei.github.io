import { getAllPosts } from '@/lib/utils/posts';
import PostCard from '@/components/molecules/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'すべての記事',
  description: 'ブログ記事の一覧ページ',
  openGraph: {
    title: 'すべての記事',
    description: 'ブログ記事の一覧ページ',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b-2 border-blue-100/50 dark:border-blue-900/30">
        すべての記事
      </h1>

      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
