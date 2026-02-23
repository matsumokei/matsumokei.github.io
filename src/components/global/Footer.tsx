export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-1">&copy; {currentYear} My Blog</p>
          <p className="text-xs">Built with Next.js & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
