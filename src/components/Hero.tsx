
import React from 'react';
import ProofRow, { ProofItem } from './ProofRow';
import ProjectCarousel from './ProjectCarousel';
import WaveDecoration from './WaveDecoration';
import type { Project } from './Portfolio';

// Faces of real clients for the hero proof strip (same photos as the testimonials)
const clientFaces = [
  { name: 'Saqlain Raza', src: '/images/saqlain.webp' },
  { name: 'Fahd Niaz Shaikh', src: '/images/fahad.webp' },
];

interface HeroProps {
  projects: Project[];
  proof: ProofItem[];
}

const Hero: React.FC<HeroProps> = ({ projects, proof }) => (
  <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
    <WaveDecoration className="-right-40 -top-10 hidden h-[420px] w-[640px] text-brand-navy/40 md:block" />

    <div className="container relative mx-auto px-4 md:px-8">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal-ink">Software agency for founders and growing teams</p>
        <h1 className="display-heading mt-5 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Software that wins you <span className="hl-block px-[0.12em] text-brand-navy">customers</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-brand-muted md:text-xl">
          For founders and growing teams who need a web or mobile product built right the first time. We design, build and ship it with senior engineers, and the people you meet are the people who build.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="#contact" className="btn btn-primary">
            Get your free project roadmap
          </a>
          <a href="#projects" className="btn btn-outline">
            See Our Work
          </a>
        </div>
        <p className="mt-4 text-sm text-brand-muted">
          30-minute call. No commitment. We reply within one business day.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="flex -space-x-3">
            {clientFaces.map((face) => (
              <img key={face.name} src={face.src} alt={face.name} width={40} height={40} className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" />
            ))}
          </div>
          <p className="text-sm text-brand-muted">
            Trusted by the founders of{' '}
            <a href="https://www.premed.pk/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy underline decoration-brand-teal decoration-2 underline-offset-4 transition-colors hover:text-brand-teal-ink">PreMed.PK</a>
            {' '}and{' '}
            <a href="https://asaanretail.io/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy underline decoration-brand-teal decoration-2 underline-offset-4 transition-colors hover:text-brand-teal-ink">Asaan Retail</a>
          </p>
        </div>
      </div>

      <ProofRow items={proof} className="mt-10" />
    </div>

    <ProjectCarousel projects={projects} />
  </section>
);

export default Hero;
