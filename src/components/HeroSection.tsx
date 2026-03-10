import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Handcrafted wooden furniture workshop" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>
    <div className="relative z-10 container-narrow section-padding">
      <div className="max-w-2xl animate-fade-in-up">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
          Manufacturer & Exporter
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
          Indian Wooden Handicrafts & Furniture
        </h1>
        <p className="font-body text-lg text-primary-foreground/80 leading-relaxed max-w-lg">
          Precision, quality and a personalized touch of hand — delivering the finest handcrafted articles from Jodhpur to the world.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
