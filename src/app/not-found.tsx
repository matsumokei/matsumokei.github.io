import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto text-center py-20">
      <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800 mb-4">
        404
      </h1>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        ページが見つかりません
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        お探しのページは存在しないか、移動された可能性があります。
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
        >
          トップページへ
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-colors"
        >
          ブログ一覧へ
        </Link>
      </div>
    </div>
  );
}
