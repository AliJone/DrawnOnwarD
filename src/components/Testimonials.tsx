import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParallaxContainer from './ParallaxContainer';

interface Testimonial {
  name: string;
  company: string;
  testimoni: string;
  imageUrl: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };
  
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
            Hear what our clients say about working with us
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <ParallaxContainer speed={0.03}>
            <div className="relative">
              {/* Navigation buttons */}
              <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
                <Button 
                  onClick={handlePrevious}
                  variant="outline" 
                  size="icon"
                  className="rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-md hover:bg-purple-100 dark:hover:bg-purple-900/20"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous</span>
                </Button>
              </div>
              
              <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
                <Button 
                  onClick={handleNext}
                  variant="outline" 
                  size="icon"
                  className="rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-md hover:bg-purple-100 dark:hover:bg-purple-900/20"
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            
              {/* Testimonial cards */}
              <div className="relative overflow-hidden px-4">
                <div 
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index} 
                      className="min-w-full px-0 md:px-4 flex justify-center"
                    >
                      {/* Add margin-top to create space for the avatar */}
                      <div className="mt-18 relative">
                        {/* Position the avatar absolutely relative to this container */}
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10">
                          <div className="relative">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 blur-sm"></div>
                            <Avatar className="relative h-32 w-32 border-4 border-white dark:border-gray-900 shadow-md">
                              <AvatarImage 
                                src={testimonial.imageUrl} 
                                alt={testimonial.name} 
                                className="object-cover h-full w-full"
                              />
                              <AvatarFallback className="text-2xl">{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                        
                        <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-0 shadow-lg max-w-2xl transform transition-all duration-500 hover:shadow-xl">
                          <CardContent className="pt-20 px-8 pb-8 relative">
                            <Quote className="absolute top-8 left-8 h-8 w-8 text-purple-200 dark:text-purple-800 opacity-40" />
                            
                            <div className="flex justify-center mb-6 text-yellow-500">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="fill-current h-4 w-4" />
                              ))}
                            </div>
                            
                            <p className="text-center mb-8 text-xl italic text-gray-700 dark:text-gray-200">
                              "{testimonial.testimoni}"
                            </p>
                            
                            <div className="text-center">
                              <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </ParallaxContainer>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;