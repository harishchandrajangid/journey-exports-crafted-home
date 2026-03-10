import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="section-padding bg-primary">
    <div className="container-narrow text-center">
      <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
        Ready to Place an Order?
      </h2>
      <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8">
        Get in touch with us via email, phone, or our enquiry form. We deliver premium handcrafted furniture worldwide with competitive pricing.
      </p>
      <Link
        to="/contact"
        className="inline-block font-body text-sm tracking-wider uppercase bg-primary-foreground text-primary px-8 py-3 rounded-sm hover:opacity-90 transition-opacity"
      >
        Contact Us
      </Link>
    </div>
  </section>
);

export default CTASection;
