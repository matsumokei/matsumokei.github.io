/**
 * Application path constants
 */
export const PATHS = {
  HOME: '/',
  BLOG: {
    INDEX: '/blog',
    POST: (slug: string) => `/blog/${slug}`,
  },
  TAGS: {
    INDEX: '/tags',
    TAG: (tag: string) => `/tags/${tag}`,
  },
} as const;

/**
 * External links
 */
export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/yourusername',
  TWITTER: 'https://twitter.com/yourusername',
  LINKEDIN: 'https://linkedin.com/in/yourusername',
} as const;

/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  // Add your API endpoints here
} as const;
