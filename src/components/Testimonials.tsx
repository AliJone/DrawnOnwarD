
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';
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
  
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-transparent to-purple-50 dark:to-purple-950/20">
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
            <div className="relative flex overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="min-w-full px-4"
                  >
                    <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-0 shadow-lg">
                      <CardContent className="pt-12 px-6 pb-6 relative">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                          <Avatar className="h-20 w-20 border-4 border-white shadow-md">
                            <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        
                        <Quote className="absolute top-6 left-6 h-8 w-8 text-purple-200 dark:text-purple-800 opacity-40" />
                        
                        <CardDescription className="text-center mb-4 text-xl italic text-gray-700 dark:text-gray-200">
                          "{testimonial.testimoni}"
                        </CardDescription>
                      </CardContent>
                      
                      <CardFooter className="flex flex-col items-center pb-6">
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index 
                      ? 'bg-purple-600' 
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
