import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { imageSrcSet, type Project } from './Portfolio';
import WaveDecoration from './WaveDecoration';

interface ProjectCarouselProps {
  projects: Project[];
}

// Horizontal row of project cards under the hero copy. Works without JS: the row is a native,
// snap-scrolling list and every card links to its project. The prev/next buttons are added after hydration.
const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => setEnhanced(true), []);

  const scrollByCard = (direction: 1 | -1) => {
    const list = listRef.current;
    if (!list) return;
    const card = list.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 20 : list.clientWidth * 0.8;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    list.scrollBy({ left: direction * step, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section aria-labelledby="selected-work-heading" className="relative mt-14 overflow-hidden bg-brand-periwinkle py-12 md:mt-20 md:py-16">
      <WaveDecoration className="-right-24 -top-16 h-[360px] w-[560px] text-white/70" flip />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 id="selected-work-heading" className="display-heading text-3xl text-white md:text-4xl">
            Selected work
          </h2>
          {enhanced && (
            <div className="hidden gap-3 sm:flex">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Show previous projects"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-periwinkle"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Show next projects"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-periwinkle"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <ul
          ref={listRef}
          aria-label="Selected projects"
          className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-2 md:-mx-8 md:scroll-px-8 md:px-8"
        >
          {projects.map((project, index) => (
            <li key={project.id} className="w-[84vw] max-w-[400px] shrink-0 snap-start sm:w-[400px]">
              <article className="flex h-full flex-col rounded-2xl bg-brand-navy p-6 text-white shadow-xl ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none">
                <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
                  <span className="text-brand-teal">{project.industry ?? project.type}</span>
                  <span className="text-white/80">{project.type}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-brand-teal">
                  {project.result ?? project.responsibility.join(' · ')}
                </p>
                <div className="mt-5 flex flex-1 items-center rounded-xl bg-white/5 p-3">
                  <img
                    src={project.imageUrl}
                    srcSet={imageSrcSet(project.imageUrl)}
                    sizes="(min-width: 640px) 352px, 76vw"
                    alt={`${project.title} shown on device mock-ups`}
                    width={1280}
                    height={1027}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <a
                  href={`#project-${project.id}`}
                  className="mt-5 inline-flex items-center gap-2 self-start font-semibold text-white underline decoration-brand-teal decoration-2 underline-offset-4 transition-colors hover:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                >
                  Explore
                  <span className="sr-only">{project.title}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectCarousel;
