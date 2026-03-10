import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { CheckCircle } from "lucide-react";

const strengths = [
  {
    title: "Eco-Friendly Furniture",
    text: "We procure wood from authorized timber merchants who provide us seasoned and chemically treated, termite free, strong, stable, and durable wood.",
  },
  {
    title: "Real Support",
    text: "Rapid response to emails is at the most priority for us. You will find our representative available to assist you round the clock.",
  },
  {
    title: "Experience",
    text: "We have rich experience of over 30 years in the business. Our skilled craftsmen are capable to develop furniture on the basis of sketches or CAD drawings.",
  },
  {
    title: "Quality",
    text: "We have incorporated procedures and quality checks at every step of production which eliminates the margin of error and ensures every piece is of high quality.",
  },
  {
    title: "Design",
    text: "Our R&D staff work on new designs in coordination with professional designers who always strive to innovate new furniture collections as per clients' taste.",
  },
  {
    title: "Inspection",
    text: "With intricate processes involved in manufacturing, we have incorporated procedures and checks at every step ensuring error-free final products.",
  },
  {
    title: "Logistics Support",
    text: "We take utmost care that the maximum space of the container is utilized to reduce shipping cost, always in touch with our consolidator for effective cargo.",
  },
  {
    title: "Safety & Insurance",
    text: "We provide insurance of the container from our warehouse. If any accident or damage occurs, we provide full insurance coverage.",
  },
];

const About = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
            A Legacy of Craftsmanship from Jodhpur
          </h1>
          <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
            <p>
              Journey Exports is a family-owned traditional business house from Jodhpur, the Royal City of Rajasthan. Handicraft is a well-known brand in the national and international market for all types of handicrafts and handmade furniture items.
            </p>
            <p>
              Continuing the legacy, Mr Rahul Gehlot founded Journey Exports as a Manufacturer & Exporter of all types of Handicrafts, Wooden Furniture including Recycled wood furniture.
            </p>
            <p>
              Celebrating the richness and diversity of Indian handicraft industry, we are a professionally managed group engaged as a manufacturer, supplier, and exporter of a premium range — Lighting Furniture, Handcrafted Iron Furniture, Decorative Items, Gift Articles, Wall Decors & Decoratives and Architectural Elements & Antique Handicrafts.
            </p>
            <p>
              At Journey Exports, we have a profoundly gifted group of artisans and craftsmen with expertise in various handicraft works. Trusting in their ability, we design and develop items which are innovative, one of a kind and of recognized quality.
            </p>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Our Strengths</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {strengths.map((s) => (
              <div key={s.title} className="flex gap-4">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order & Payment */}
      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-display text-3xl text-foreground mb-8 text-center">How to Order</h2>
          <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
            <p>
              Orders can be placed through Email, Phone calls or by filling out the enquiry form on our website. You will receive a confirmation email upon receipt.
            </p>
            <p>
              <strong className="text-foreground">Payment Terms:</strong> 50% advance payment at the time of order placement and the remaining 50% against order/container dispatch. Payment modes include Wire/Telex Transfer (T/T) and Letter of Credit (L/C) — the safest and most secure methods in international trade.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </>
);

export default About;
