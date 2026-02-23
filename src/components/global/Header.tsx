import Link from 'next/link';
import ThemeToggle from '@/components/base/ThemeToggle';

export default function Header() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/cv', label: 'CV' },
    { href: '/blog', label: 'Blog' },
    { href: '/tags', label: 'Tags' },
  ];

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            My Blog
          </Link>

          <div className="flex items-center gap-3 md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
