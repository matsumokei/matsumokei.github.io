import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

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

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fullPathMdx = path.join(postsDirectory, `${realSlug}.mdx`);
  
  let fileContents: string;
  if (fs.existsSync(fullPath)) {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } else if (fs.existsSync(fullPathMdx)) {
    fileContents = fs.readFileSync(fullPathMdx, 'utf8');
  } else {
    throw new Error(`Post not found: ${slug}`);
  }

  const { data, content } = matter(fileContents);
  const readTime = readingTime(content);

  return {
    slug: realSlug,
    title: data.title || realSlug,
    date: data.date || new Date().toISOString(),
    description: data.description,
    tags: data.tags || [],
    draft: data.draft || false,
    content,
    readingTime: readTime.text,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.mdx?$/, '')))
    .filter(post => !post.draft)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts();
  return posts.filter(post => post.tags?.includes(tag));
}
