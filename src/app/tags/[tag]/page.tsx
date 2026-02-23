import { notFound } from 'next/navigation';
import { getAllTags, getPostsByTag } from '@/lib/utils/posts';
import PostCard from '@/components/molecules/PostCard';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { tag } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

  return {
    title: `タグ: ${tag}`,
    description: `${tag} タグの記事一覧`,
    openGraph: {
      title: `タグ: ${tag}`,
      description: `${tag} タグの記事一覧`,
      url: `${siteUrl}/tags/${tag}`,
    },
    twitter: {
      card: 'summary',
      title: `タグ: ${tag}`,
      description: `${tag} タグの記事一覧`,
    },
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 pb-4 border-b-2 border-blue-100/50 dark:border-blue-900/30">
        <Link
          href="/tags"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
        >
          ← タグ一覧
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-3">
          #{tag}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {posts.length}件の記事
        </p>
      </div>

      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
