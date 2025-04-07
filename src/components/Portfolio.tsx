
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import ParallaxContainer from './ParallaxContainer';

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
  
  return (
    <section id="portfolio" className="py-24 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our diverse portfolio of successful projects that showcase our expertise and innovation.
          </p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {projects.map((project, index) => (
            <ParallaxContainer 
              key={project.id} 
              className="project-card opacity-0 transition-all duration-700"
              speed={0.05} 
              direction={index % 2 === 0 ? 'vertical' : 'horizontal'}
            >
              <Card className="overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 h-full">
                <CardHeader className="relative p-0">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-black/70 text-white hover:bg-black/90">
                    {project.type}
                  </Badge>
                </CardHeader>
                
                <CardContent className="pt-6 pb-2 px-6">
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-base">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.responsibility.map((resp, idx) => (
                      <Badge key={idx} variant="outline" className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                        {resp}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="px-6 pb-6 pt-2 flex justify-start">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="outline" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 border-0">
                        View Details
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">{project.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {project.description}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </CardFooter>
              </Card>
            </ParallaxContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
