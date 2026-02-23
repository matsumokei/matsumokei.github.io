import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/utils/posts';
import { formatDistance } from 'date-fns';
import { ja } from 'date-fns/locale';
import Link from 'next/link';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import TableOfContents from '@/components/base/TableOfContents';
import 'katex/dist/katex.min.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  return {
    title: post.title,
    description: post.description || post.title,
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url: `${siteUrl}/blog/${slug}`,
      title: post.title,
      description: post.description || post.title,
      publishedTime: post.date,
      authors: ["Your Name"],
      tags: post.tags,
      images: [
        {
          url: `/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description || post.title,
      images: [`/og-image.png`],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const timeAgo = formatDistance(new Date(post.date), new Date(), {
    addSuffix: true,
    locale: ja,
  });

  return (
    <>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex gap-8">
          {/* Main content */}
          <article className="flex-1 max-w-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <header className="mb-8 pb-6 border-b-2 border-blue-100/50 dark:border-blue-900/30">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
                <time dateTime={post.date}>{timeAgo}</time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
            </header>

            <div className="prose max-w-none mb-8">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [
                      rehypeKatex,
                      rehypeHighlight,
                      rehypeSlug,
                      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                    ],
                  },
                }}
              />
            </div>

            {post.tags && post.tags.length > 0 && (
              <footer className="pt-6 border-t-2 border-blue-100/50 dark:border-blue-900/30">
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
              </footer>
            )}

            <div className="mt-8 pt-6 border-t-2 border-blue-100/50 dark:border-blue-900/30">
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
              >
                ← 記事一覧
              </Link>
            </div>
          </article>

          {/* Table of Contents - Desktop only */}
          <aside className="w-64 flex-shrink-0">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </>
  );
}
