import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star, Linkedin, ExternalLink } from 'lucide-react';
import ParallaxContainer from './ParallaxContainer';

export interface Testimonial {
  name: string;
  company: string;
  testimoni: string;
  imageUrl?: string;
  linkedinUrl: string;
  companyUrl: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

// Wall of proof: every testimonial visible at once, each linked to a real
// person and a live product so visitors can verify it themselves.
const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-purple-400/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-pink-400/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Client Testimonials
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real founders, real products. Every name links to a LinkedIn profile and every company to a live site.
          </p>
        </div>
        
        <ParallaxContainer speed={0.03}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 pt-16 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.linkedinUrl} className="relative">
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 blur-sm"></div>
                    <Avatar className="relative h-28 w-28 border-4 border-white dark:border-gray-900 shadow-md">
                      <AvatarImage 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name} 
                        className="object-cover h-full w-full"
                      />
                      <AvatarFallback className="text-2xl">{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                <Card className="h-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-0 shadow-lg transform transition-all duration-500 hover:shadow-xl">
                  <CardContent className="pt-20 px-8 pb-8 relative flex flex-col h-full">
                    <Quote className="absolute top-6 left-6 h-8 w-8 text-purple-200 dark:text-purple-800 opacity-40" />
                    
                    <div className="flex justify-center mb-6 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="fill-current h-4 w-4" />
                      ))}
                    </div>
                    
                    <p className="text-center mb-8 text-lg italic text-gray-700 dark:text-gray-200 flex-1">
                      "{testimonial.testimoni}"
                    </p>
                    
                    <div className="text-center">
                      <a
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-lg text-gray-900 dark:text-gray-100 hover:text-purple-600 transition-colors"
                      >
                        {testimonial.name}
                        <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                      </a>
                      <p className="text-sm text-gray-700 dark:text-gray-400">{testimonial.company}</p>
                      <a
                        href={testimonial.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-purple-800 hover:text-pink-700 transition-colors"
                      >
                        Visit live site
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </ParallaxContainer>
      </div>
    </section>
  );
};

export default Testimonials;
