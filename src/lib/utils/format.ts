/**
 * Date formatting utilities
 */
import { formatDistance as formatDistanceUtil } from 'date-fns';
import { ja } from 'date-fns/locale';

export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatDistance = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatDistanceUtil(dateObj, new Date(), {
    addSuffix: true,
    locale: ja,
  });
};

/**
 * String formatting utilities
 */
export const truncate = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trim()}...`;
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

/**
 * Array utilities
 */
export const unique = <T>(array: T[]): T[] => {
  return Array.from(new Set(array));
};

export const sortByDate = <T extends { date: string }>(items: T[]): T[] => {
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
