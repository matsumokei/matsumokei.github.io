import type { Metadata } from 'next';
import { Timeline } from '@/components/base/Timeline';
import type { TimelineItem } from '@/types/timeline';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Keisuke Matsumoto - Software Developer and Researcher',
  openGraph: {
    title: 'About Me',
    description: 'Keisuke Matsumoto - Software Developer and Researcher',
  },
};

const timelineItems: TimelineItem[] = [
  // Publications
  {
    date: '2023-03-20',
    title: 'Spectroscopic estimation of the photon number for superconducting Kerr parametric oscillators',
    action: '論文発表',
    url: 'https://iopscience.iop.org/article/10.35848/1347-4065/acc3a8/meta',
    description: 'The Journal of the Physical Society of Japan',
    excluded: false,
  },
  {
    date: '2022-02-15',
    title: 'Calculation of Gibbs partition function with imaginary time evolution on near-term quantum computers',
    action: '論文発表',
    url: 'https://iopscience.iop.org/article/10.35848/1347-4065/ac5152/meta',
    description: 'The Journal of the Physical Society of Japan',
    excluded: false,
  },
  // Presentations English
  {
    date: '2023-12-05',
    title: 'Beyond Guidelines - Designing and Implementing Robust Build Pipelines',
    action: 'プレゼンテーション',
    url: 'https://youtu.be/aLk83mxz8OM',
    description: 'Open Source Summit Japan 2023@Ariake, Tokyo, Japan',
    excluded: false,
  },
  {
    date: '2023-09-26',
    title: 'Spectroscopic method for measuring the number of photons in superconducting Kerr parametric oscillators',
    action: 'プレゼンテーション',
    url: 'https://ssdm.jp/2023/committees.html',
    description: 'SSDM 2023@Makuhari',
    excluded: false,
  },
  {
    date: '2023-03-08',
    title: 'Spectroscopic method for measuring the number of photons in superconducting Kerr parametric oscillators',
    action: 'プレゼンテーション',
    url: 'https://ui.adsabs.harvard.edu/abs/2023APS..MARB73012M/abstract',
    description: 'APS March Meeting 2023@Las Vegas',
    excluded: false,
  },
  // Presentations Japanese
  {
    date: '2024-11-01',
    title: 'SLSAワークショップ アシスタント',
    action: 'ワークショップ',
    url: 'https://www.linuxfoundation.jp/events/2024/10/join-us-at-the-slsa-workshop-on-november-1/',
    description: 'SLSAワークショップ By OpenSSF@国際文化会館',
    excluded: false,
  },
  {
    date: '2023-11-17',
    title: 'OSSの依存関係に注目した脆弱性評価・対策への適用提案',
    action: 'ポスター発表',
    url: 'https://www.network-science-seminar.com/activities/2023/poster',
    description: 'ネットワーク科学研究会@同志社大学',
    excluded: false,
  },
  {
    date: '2021-09-14',
    title: 'NISQ デバイスを用いた分配関数の計算 II',
    action: 'プレゼンテーション',
    url: undefined,
    description: '日本物理学会 2021 年秋季大会@オンライン',
    excluded: false,
  },
  {
    date: '2021-06-01',
    title: 'NISQ デバイスを用いた分配関数の計算',
    action: 'プレゼンテーション',
    url: undefined,
    description: '第 4 回量子ソフトウェア研究会@オンライン',
    excluded: false,
  },
  {
    date: '2021-03-12',
    title: 'NISQ デバイスを用いた分配関数の計算',
    action: 'プレゼンテーション',
    url: undefined,
    description: '日本物理学会 第 76 回年次大会 (2021 年)@オンライン',
    excluded: false,
  },
  // Career
  {
    date: '2023-04-01',
    title: 'Hitachi, Ltd. R&D - Researcher',
    action: '入社',
    url: undefined,
    description: '@Yokohama Totsuka',
    excluded: false,
  },
  {
    date: '2023-03-31',
    title: 'Tokyo University of Science - Master degree',
    action: '修了',
    url: undefined,
    description: 'Physics @Nikuni laboratory',
    excluded: false,
  },
  {
    date: '2022-08-31',
    title: 'Japan Atomic Energy Agency (JAEA) - Intern',
    action: 'インターン終了',
    url: undefined,
    description: '@Kashiwa, Mentor: Yuki Nagai',
    excluded: false,
  },
  {
    date: '2022-07-01',
    title: 'Japan Atomic Energy Agency (JAEA) - Intern',
    action: 'インターン開始',
    url: undefined,
    description: '@Kashiwa',
    excluded: false,
  },
  {
    date: '2021-04-01',
    title: 'National Institute of Advanced Industrial Science and Technology (AIST)',
    action: '研究開始',
    url: undefined,
    description: 'Quantum Computing Researcher @Matsuzaki Team',
    excluded: false,
  },
  {
    date: '2021-03-31',
    title: 'Tokyo University of Science - Bachelor degree',
    action: '卒業',
    url: undefined,
    description: '@Physics',
    excluded: false,
  },
];

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 1.2rem' }}>
      {/* Hero Section */}
      <div style={{ padding: '4rem 0 5rem' }}>
        <h1 style={{ 
          marginTop: '3.3rem', 
          fontSize: '2.7rem', 
          lineHeight: '1.2',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          Hi, I'm Keisuke
        </h1>
        <p style={{ 
          marginTop: '2.3rem', 
          fontSize: '1.1rem', 
          lineHeight: '1.8',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }} className="text-gray-600 dark:text-gray-400">
          R&D engineer interested in Software Supply Chain Security, DevSecOps and Open Source Software.
          Currently working at <a href="https://www.hitachi.com" className="underline hover:text-gray-900 dark:hover:text-white">Hitachi, Ltd.</a>
          {' '}My primary programming languages are Golang and Python. Follow{' '}
          <a href="https://github.com/matsumokei" className="underline hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1">
            @matsumokei
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          {' '}for daily updates.
        </p>
      </div>

      {/* Timeline */}
      <div>
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
}