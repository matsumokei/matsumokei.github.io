/**
 * Common types used across the application
 */

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  draft?: boolean;
}

export interface Post extends PostMeta {
  content: string;
  readingTime: string;
}

export interface Tag {
  name: string;
  count: number;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
