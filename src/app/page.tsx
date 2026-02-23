import Link from 'next/link';
import { getAllPosts } from '@/lib/utils/posts';
import PostCard from '@/components/molecules/PostCard';

export default function Home() {
  const posts = getAllPosts().slice(0, 10);

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-10 pb-8 border-b-2 border-blue-100/50 dark:border-blue-900/30">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          📝 My Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          技術ブログ - プログラミング、開発の学びを共有
        </p>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            記事一覧
          </h2>
        </div>

        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
          >
            すべての記事を見る →
          </Link>
        </div>
      </section>
    </div>
  );
}
