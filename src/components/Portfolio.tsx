import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, ExternalLink, Code, Smartphone, X } from 'lucide-react';
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
    <section id="projects" className="py-24 bg-agency-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block bg-[#222222] py-3 px-6 -rotate-1 neo-brutalist mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-200">
              Our Work
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6">
            Explore our diverse portfolio of successful projects that showcase our expertise and innovation.
          </p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card opacity-0 transform transition-all duration-700 ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              }`}
            >
              <Card className="neo-brutalist bg-[#1A1F2C] text-gray-200 overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(86,63,131,0.8)] transition-all duration-300">
                <CardHeader className="p-0 overflow-hidden">
                  <AspectRatio ratio={16/9} className="bg-gray-800">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center"
                    />
                  </AspectRatio>
                  
                  <div className="absolute top-4 right-4">
                    <Badge className="neo-brutalist bg-[#403E43] text-gray-200 font-bold px-3 py-1 flex gap-1 items-center border-[2px] border-[#555555]">
                      {getProjectIcon(project.type)}
                      {project.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6 pb-0 px-6">
                  <CardTitle className="text-2xl font-black mb-3 text-gray-100">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.responsibility.map((resp, idx) => (
                      <Badge key={idx} 
                        className="neo-brutalist bg-[#333333] text-gray-200 border-[1px] border-[#555555] font-medium"
                      >
                        {resp}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="px-6 py-4 flex justify-start">
                  <Button 
                    onClick={() => setSelectedProject(project)}
                    className="neo-brutalist bg-[#8E9196] text-[#1A1F2C] hover:bg-[#8E9196]/90 hover:shadow-[4px_4px_0px_0px_rgba(34,34,34,1)]"
                  >
                    <span className="font-bold">View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[725px] p-0 overflow-hidden neo-brutalist bg-[#1A1F2C] text-gray-200 border-[4px] border-[#333333]">
            <div className="relative">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover border-b-[4px] border-[#333333]"
              />
              <Button 
                className="absolute top-4 right-4 h-8 w-8 p-0 neo-brutalist bg-[#333333] text-gray-200 hover:bg-[#555555] hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <DialogHeader className="px-6 pt-6">
              <div className="flex items-start justify-between">
                <DialogTitle className="text-3xl font-black text-gray-100">{selectedProject.title}</DialogTitle>
                <Badge className="neo-brutalist bg-[#403E43] text-gray-200 flex gap-1 items-center px-3 py-1 font-bold border-[2px] border-[#555555]">
                  {getProjectIcon(selectedProject.type)}
                  {selectedProject.type}
                </Badge>
              </div>
            </DialogHeader>

            <div className="px-6 pb-6">
              <DialogDescription className="text-base mb-6 text-gray-300">
                {selectedProject.description}
              </DialogDescription>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-gray-100">Responsibilities:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.responsibility.map((resp, idx) => (
                    <Badge key={idx} 
                      className="neo-brutalist bg-[#333333] text-gray-200 border-[1px] border-[#555555] font-medium"
                    >
                      {resp}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Portfolio;
