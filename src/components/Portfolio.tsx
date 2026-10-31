import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, ExternalLink, Code, Smartphone } from 'lucide-react';
import SectionHeading from './SectionHeading';

export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  type: string;
  industry?: string;
  description: string;
  responsibility: string[];
  url?: string;
  result?: string;
}

interface PortfolioProps {
  projects: Project[];
}

// Each mock-up ships as 1280px plus 640/960px renditions (public/images/*-640.webp, *-960.webp)
export const imageSrcSet = (url: string) =>
  `${url.replace(/\.webp$/, '-640.webp')} 640w, ${url.replace(/\.webp$/, '-960.webp')} 960w, ${url} 1280w`;

const Portfolio = ({ projects }: PortfolioProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'Website':
        return <Code className="h-4 w-4" aria-hidden="true" />;
      case 'Mobile Apps':
        return <Smartphone className="h-4 w-4" aria-hidden="true" />;
      default:
        return <ExternalLink className="h-4 w-4" aria-hidden="true" />;
    }
  };

  return (
    <section id="projects" className="scroll-mt-20 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          align="center"
          title="Our work"
          subtitle="Four products we designed and built, with the founders' names on them. Every live site is linked so you can try the product yourself."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            // Anchor target for the hero carousel's Explore links; :target adds a teal ring
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-brand-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg target:ring-4 target:ring-brand-teal"
            >
              <div className="relative flex aspect-[16/10] items-center bg-gradient-to-br from-brand-paper to-[#e6e9f2] p-6">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} shown on device mock-ups`}
                  width={1280}
                  height={1027}
                  loading="lazy"
                  decoding="async"
                  srcSet={imageSrcSet(project.imageUrl)}
                  sizes="(min-width: 1400px) 600px, (min-width: 768px) 45vw, 90vw"
                  className="h-full w-full object-contain"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold text-white">
                  {getProjectIcon(project.type)}
                  {project.type}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                {project.industry && (
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal-ink">{project.industry}</p>
                )}
                <h3 className="mt-2 text-2xl font-semibold text-brand-navy">{project.title}</h3>
                {project.result && (
                  <p className="mt-2 font-semibold text-brand-teal-ink">{project.result}</p>
                )}
                <p className="mt-3 line-clamp-3 leading-relaxed text-brand-ink/80">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Our responsibilities">
                  {project.responsibility.map((resp) => (
                    <li key={resp} className="rounded-full border border-brand-line bg-brand-paper px-3 py-1 text-xs font-medium text-brand-navy">
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-outline btn-sm"
                  >
                    View details
                    <span className="sr-only">about {project.title}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-brand-navy underline decoration-brand-teal decoration-2 underline-offset-4 transition-colors hover:text-brand-teal-ink"
                    >
                      Visit live site
                      <span className="sr-only">: {project.title}</span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-h-[90vh] overflow-y-auto bg-white p-0 text-brand-ink sm:max-w-[725px] sm:rounded-2xl">
            <div className="bg-gradient-to-br from-brand-paper to-[#e6e9f2] p-8">
              <img
                src={selectedProject.imageUrl}
                alt={`${selectedProject.title} shown on device mock-ups`}
                width={1280}
                height={1027}
                className="mx-auto max-h-64 w-auto object-contain"
              />
            </div>

            <DialogHeader className="px-6 pt-6 md:px-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <DialogTitle className="text-3xl font-semibold text-brand-navy">{selectedProject.title}</DialogTitle>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold text-white">
                  {getProjectIcon(selectedProject.type)}
                  {selectedProject.type}
                </span>
              </div>
            </DialogHeader>

            <div className="px-6 pb-8 md:px-8">
              {selectedProject.result && (
                <p className="mb-4 font-semibold text-brand-teal-ink">{selectedProject.result}</p>
              )}

              <DialogDescription className="mb-6 text-base leading-relaxed text-brand-ink/80">
                {selectedProject.description}
              </DialogDescription>

              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm mb-6"
                >
                  Visit live site
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}

              <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal-ink">Our responsibilities</h4>
              <ul className="flex flex-wrap gap-2">
                {selectedProject.responsibility.map((resp) => (
                  <li key={resp} className="rounded-full border border-brand-line bg-brand-paper px-3 py-1 text-xs font-medium text-brand-navy">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Portfolio;
