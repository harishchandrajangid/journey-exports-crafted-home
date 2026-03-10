import { Leaf, HeartHandshake, Shield, Truck } from "lucide-react";

const values = [
  { icon: Leaf, label: "Eco-Friendly", desc: "Sustainably sourced, chemically treated wood" },
  { icon: HeartHandshake, label: "30+ Years", desc: "Rich legacy of craftsmanship experience" },
  { icon: Shield, label: "Quality Assured", desc: "Rigorous inspection at every production step" },
  { icon: Truck, label: "Global Delivery", desc: "Secure, insured shipping worldwide" },
];

const ValuesStrip = () => (
  <section className="section-padding">
    <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {values.map((v) => (
        <div key={v.label} className="space-y-3">
          <v.icon className="mx-auto text-primary" size={32} strokeWidth={1.5} />
          <h4 className="font-display text-lg text-foreground">{v.label}</h4>
          <p className="font-body text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ValuesStrip;
