/**
 * Site configuration
 */
export const SITE_CONFIG = {
  name: 'My Tech Blog',
  description: '技術ブログ - Next.js, TypeScript, その他の技術について',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  ogImage: '/og-image.png',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
  },
  links: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
} as const;

/**
 * Blog configuration
 */
export const BLOG_CONFIG = {
  postsPerPage: 10,
  excerptLength: 160,
} as const;
