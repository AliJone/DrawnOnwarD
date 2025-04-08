
import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, ExternalLink, Code, Smartphone } from 'lucide-react';
import ParallaxContainer from './ParallaxContainer';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Project {
  id: string;
  title: string;
  imageUrl: string;
  type: string;
  description: string;
  responsibility: string[];
}

interface PortfolioProps {
  projects: Project[];
}

const Portfolio = ({ projects }: PortfolioProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'opacity-100');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      projectCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [projects]);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'Website':
        return <Code className="h-5 w-5" />;
      case 'Mobile Apps':
        return <Smartphone className="h-5 w-5" />;
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };
  
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-transparent to-purple-50/30 dark:to-purple-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our diverse portfolio of successful projects that showcase our expertise and innovation.
          </p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <ParallaxContainer 
              key={project.id} 
              className="project-card opacity-0 transition-all duration-700"
              speed={0.05} 
              direction={index % 2 === 0 ? 'vertical' : 'horizontal'}
            >
              <Card className="group overflow-hidden border border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:shadow-xl transition-all duration-500 h-full">
                <CardHeader className="relative p-0 overflow-hidden">
                  <AspectRatio ratio={16/9} className="bg-gray-100 dark:bg-gray-800">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-white/90 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-black/70 text-white hover:bg-black/90 flex gap-1 items-center">
                    {getProjectIcon(project.type)}
                    {project.type}
                  </Badge>
                </CardHeader>
                
                <CardContent className="pt-6 pb-2 px-6">
                  <CardTitle className="text-2xl mb-3 group-hover:text-purple-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-base">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.responsibility.map((resp, idx) => (
                      <Badge key={idx} variant="outline" className="bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 border-purple-300/50 dark:border-purple-700/50">
                        {resp}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="px-6 pb-6 pt-2 flex justify-start">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedProject(project)}
                    className="group/btn relative overflow-hidden border-purple-600 text-purple-600 hover:text-white transition-colors"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center gap-1">
                      View Details 
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </ParallaxContainer>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[725px] p-0 overflow-hidden">
            <div className="w-full">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
            </div>
            <DialogHeader className="px-6 pt-6">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white flex gap-1 items-center">
                  {getProjectIcon(selectedProject.type)}
                  {selectedProject.type}
                </Badge>
              </div>
            </DialogHeader>
            <div className="px-6 pb-6">
              <DialogDescription className="text-base mb-4">
                {selectedProject.description}
              </DialogDescription>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Responsibilities:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.responsibility.map((resp, idx) => (
                    <Badge key={idx} variant="outline" className="bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 border-purple-300/50 dark:border-purple-700/50">
                      {resp}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
                >
                  Visit Project <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Portfolio;
