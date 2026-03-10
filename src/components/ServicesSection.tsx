import serviceHandicraft from "@/assets/service-handicraft.jpg";
import serviceFurniture from "@/assets/service-furniture.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";

const services = [
  {
    title: "Wooden Handicrafts",
    description: "Intricately hand-carved decorative items, gift articles, wall decors & architectural elements crafted by skilled artisans.",
    image: serviceHandicraft,
  },
  {
    title: "Wooden Furniture",
    description: "Premium handcrafted furniture including inlaid furniture, sheesham wood pieces & recycled wood furniture.",
    image: serviceFurniture,
  },
  {
    title: "Industrial Furniture",
    description: "Modern industrial-style furniture combining reclaimed wood with iron & metal for contemporary spaces.",
    image: serviceIndustrial,
  },
];

const ServicesSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <div className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">What We Offer</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="group">
            <div className="overflow-hidden rounded-sm mb-6">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-display text-xl mb-3 text-foreground">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
