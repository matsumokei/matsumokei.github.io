import { Timeline } from '@/components/base/Timeline';
import type { TimelineItem } from '@/types/timeline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV - Keisuke Matsumoto',
  description: 'Curriculum Vitae of Keisuke Matsumoto',
};

const careerItems: TimelineItem[] = [
  {
    date: '2023-04-01',
    title: 'Researcher at Hitachi, Ltd. R&D',
    action: 'joined',
    url: undefined,
    description: 'Yokohama Totsuka. Working on Software Supply Chain Security, DevSecOps, and Secure CICD Pipeline development.',
  },
  {
    date: '2021-04-01',
    title: 'Quantum Computing Researcher at AIST',
    action: 'joined',
    url: undefined,
    description: 'Matsuzaki Team. National Institute of Advanced Industrial Science and Technology.',
  },
  {
    date: '2022-07-01',
    title: 'Intern at Japan Atomic Energy Agency (JAEA)',
    action: 'joined',
    url: undefined,
    description: 'Kashiwa. Mentor: Yuki Nagai.',
  },
  {
    date: '2021-04-01',
    title: 'Master degree Physics at Tokyo University of Science',
    action: 'started',
    url: undefined,
    description: 'Nikuni laboratory.',
  },
  {
    date: '2017-04-01',
    title: 'Bachelor degree Physics at Tokyo University of Science',
    action: 'started',
    url: undefined,
    description: 'Physics department.',
  },
];

const projects = [
  {
    title: 'Developing Secure Pipeline For Financial Sector',
    period: '2023.04 - Present',
    tech: 'shell, Linux(RedHat/Windows), Docker, Jenkins, Syft, Grype',
  },
  {
    title: 'Evaluation of SBOM/Software Components Management Tools',
    period: '2023.04 - Present',
  },
  {
    title: 'Developing DevSecOps CICD Pipeline For Financial Sector',
    period: '2023.04 - Present',
    tech: 'Golang, Python, shell, Linux(Ubuntu), Docker, GitLab, Jenkins, Syft, Grype',
  },
  {
    title: 'Evaluation of SBOM Generate / Vulnerabilities Detection Tools',
    period: '2023.04 - Present',
    tech: 'shell, CUE, Linux(Ubuntu), Syft, Grype',
  },
  {
    title: 'Developing Secure CICD/Build Pipeline',
    period: '2023.04 - Present',
    tech: 'shell, Python, Linux(Ubuntu), Kubernetes, GitLab, Tekton, Sigstore, Syft, Grype, Docker',
  },
];

const publications = [
  {
    title: 'Spectroscopic estimation of the photon number for superconducting Kerr parametric oscillators',
    year: 2023,
    url: 'https://iopscience.iop.org/article/10.35848/1347-4065/acc3a8/meta',
  },
  {
    title: 'Calculation of Gibbs partition function with imaginary time evolution on near-term quantum computers',
    year: 2022,
    url: 'https://iopscience.iop.org/article/10.35848/1347-4065/ac5152/meta',
  },
];

const presentationsEn = [
  {
    title: 'Beyond Guidelines - Designing and Implementing Robust Build Pipelines',
    conference: 'Open Source Summit Japan 2023',
    location: 'Ariake, Tokyo, Japan',
    year: 2023,
    url: 'https://youtu.be/aLk83mxz8OM',
  },
  {
    title: 'Spectroscopic method for measuring the number of photons in superconducting Kerr parametric oscillators',
    conference: 'APS March Meeting 2023',
    location: 'Las Vegas',
    year: 2023,
    url: 'https://ui.adsabs.harvard.edu/abs/2023APS..MARB73012M/abstract',
  },
  {
    title: 'Spectroscopic method for measuring the number of photons in superconducting Kerr parametric oscillators',
    conference: 'SSDM (Solid State Devices and Materials) 2023',
    location: 'Makuhari',
    year: 2023,
    url: 'https://ssdm.jp/2023/committees.html',
  },
];

const presentationsJa = [
  {
    title: 'SLSAワークショップ アシスタント',
    conference: 'SLSAワークショップ By OpenSSF',
    location: '国際文化会館',
    year: 2024,
    url: 'https://www.linuxfoundation.jp/events/2024/10/join-us-at-the-slsa-workshop-on-november-1/',
  },
  {
    title: 'OSSの依存関係に注目した脆弱性評価・対策への適用提案',
    conference: 'ネットワーク科学研究会',
    location: '同志社大学（今出川キャンパス）',
    year: 2023,
    url: 'https://www.network-science-seminar.com/activities/2023/poster',
  },
  {
    title: 'NISQデバイスを用いた分配関数の計算',
    conference: '第4回量子ソフトウェア研究会',
    location: 'オンライン',
    year: 2021,
  },
  {
    title: 'NISQデバイスを用いた分配関数の計算 II',
    conference: '日本物理学会 2021年秋季大会',
    location: 'オンライン',
    year: 2021,
  },
  {
    title: 'NISQデバイスを用いた分配関数の計算',
    conference: '日本物理学会 第76回年次大会 (2021年)',
    location: 'オンライン',
    year: 2021,
  },
];

export default function CVPage() {
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 1.2rem' }}>
      <div style={{ padding: '4rem 0 5rem' }}>
        <h1
          style={{
            fontSize: '2.7rem',
            lineHeight: '1.2',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            marginBottom: '2rem',
            color: 'var(--foreground)',
          }}
        >
          Curriculum Vitae
        </h1>
        <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: 'var(--text-secondary)',
          }}
        >
          Keisuke Matsumoto - Software Developer and Researcher
        </p>
      </div>

      {/* Career Timeline */}
      <section style={{ marginBottom: '4rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: 'var(--foreground)',
          }}
        >
          Career
        </h2>
        <Timeline items={careerItems} />
      </section>

      {/* Current Projects at Hitachi */}
      <section style={{ marginBottom: '4rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: 'var(--foreground)',
          }}
        >
          Current Projects
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index}>
              <h3
                style={{
                  fontSize: '1.1rem',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: 'var(--foreground)',
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem',
                }}
              >
                {project.period}
              </p>
              {project.tech && (
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {project.tech}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section style={{ marginBottom: '4rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: 'var(--foreground)',
          }}
        >
          Publications
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {publications.map((pub, index) => (
            <div key={index}>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '1rem',
                  textDecoration: 'underline',
                  color: 'var(--foreground)',
                }}
              >
                {pub.title}
              </a>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                {pub.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Presentations (English) */}
      <section style={{ marginBottom: '4rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: 'var(--foreground)',
          }}
        >
          Presentations (English)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {presentationsEn.map((pres, index) => (
            <div key={index}>
              {pres.url ? (
                <a
                  href={pres.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '1rem',
                    textDecoration: 'underline',
                    color: 'var(--foreground)',
                  }}
                >
                  {pres.title}
                </a>
              ) : (
                <p style={{ fontSize: '1rem', margin: 0, color: 'var(--foreground)' }}>{pres.title}</p>
              )}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                {pres.conference} @{pres.location} ({pres.year})
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Presentations (Japanese) */}
      <section style={{ marginBottom: '4rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: 'var(--foreground)',
          }}
        >
          Presentations (Japanese)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {presentationsJa.map((pres, index) => (
            <div key={index}>
              {pres.url ? (
                <a
                  href={pres.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '1rem',
                    textDecoration: 'underline',
                    color: 'var(--foreground)',
                  }}
                >
                  {pres.title}
                </a>
              ) : (
                <p style={{ fontSize: '1rem', margin: 0, color: 'var(--foreground)' }}>{pres.title}</p>
              )}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                {pres.conference} @{pres.location} ({pres.year})
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
