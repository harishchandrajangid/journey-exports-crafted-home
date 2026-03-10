import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-narrow section-padding !py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-display text-xl mb-4">Journey Exports</h3>
        <p className="font-body text-sm leading-relaxed opacity-80">
          Manufacturer & Exporter of Indian Wooden Handicrafts, Furniture & Decorative Items from Jodhpur, Rajasthan.
        </p>
      </div>
      <div>
        <h4 className="font-display text-lg mb-4">Quick Links</h4>
        <div className="space-y-2 font-body text-sm opacity-80">
          <Link to="/" className="block hover:opacity-100 transition-opacity">Home</Link>
          <Link to="/about" className="block hover:opacity-100 transition-opacity">About Us</Link>
          <Link to="/contact" className="block hover:opacity-100 transition-opacity">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-display text-lg mb-4">Contact</h4>
        <div className="space-y-3 font-body text-sm opacity-80">
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>Plot No 3, MIA 2nd Phase, Basni, Jodhpur 342005</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="shrink-0" />
            <a href="tel:9828214422" className="hover:opacity-100">+91 9828214422</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="shrink-0" />
            <a href="mailto:journeyexports@gmail.com" className="hover:opacity-100">journeyexports@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 text-center py-6 font-body text-xs opacity-60">
      © {new Date().getFullYear()} Journey Exports. All rights reserved.
    </div>
  </footer>
);

export default Footer;
