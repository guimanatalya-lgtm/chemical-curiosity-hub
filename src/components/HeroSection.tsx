import heroImage from '@/assets/hero-chemistry.jpg';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Química no
          <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Dia a Dia
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          Descubra como bases e elementos químicos estão presentes em nosso cotidiano,
          transformando nossa vida de formas que nem imaginamos.
        </p>
        
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 text-lg shadow-chemical transform hover:scale-105 transition-all duration-300"
        >
          Explorar Química
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;