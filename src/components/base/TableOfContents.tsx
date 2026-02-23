'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Extract headings from the article
    const article = document.querySelector('article');
    console.log('🔍 article element:', article);
    
    if (!article) {
      console.log('❌ No article found!');
      return;
    }

    const elements = article.querySelectorAll('h2, h3');
    console.log('📋 Found headings:', elements.length);
    
    const headingData: Heading[] = Array.from(elements).map((element) => {
      console.log('📌 Heading:', element.tagName, element.id, element.textContent);
      return {
        id: element.id,
        text: element.textContent || '',
        level: Number(element.tagName.charAt(1)),
      };
    });

    console.log('✅ Heading data:', headingData);
    setHeadings(headingData);

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Zennスタイルの目次
  return (
    <nav className="sticky top-24 bg-gradient-to-br from-blue-50/60 to-purple-50/60 dark:from-blue-900/15 dark:to-purple-900/15 backdrop-blur-md rounded-lg p-4 shadow-lg">
      <div className="pb-2 mb-3 border-b-2 border-blue-200/50 dark:border-blue-800/40">
        <h2 className="text-sm font-bold text-blue-900 dark:text-blue-200">
          📑 目次
        </h2>
      </div>
      
      <ul className="space-y-1.5 text-sm border-l-2 border-blue-300/50 dark:border-blue-700/50">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? 'pl-6' : 'pl-3'}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block py-1 transition-colors duration-150 ${
                activeId === heading.id
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
