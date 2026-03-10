import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We will get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-narrow">
            <div className="text-center mb-16">
              <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">Get In Touch</p>
              <h1 className="font-display text-4xl md:text-5xl text-foreground">Contact Us</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-6">We'd Love to Hear From You</h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Whether you have a question about our products, need a custom order, or want a quotation — our team is ready to help.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary shrink-0 mt-1" size={20} strokeWidth={1.5} />
                    <div className="font-body text-sm text-muted-foreground">
                      <p className="text-foreground font-medium mb-1">Address</p>
                      Plot No 3, MIA 2nd Phase, Basni, Jodhpur 342005, Rajasthan, India
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary shrink-0 mt-1" size={20} strokeWidth={1.5} />
                    <div className="font-body text-sm text-muted-foreground">
                      <p className="text-foreground font-medium mb-1">Phone</p>
                      <a href="tel:9828214422" className="hover:text-primary transition-colors">+91 9828214422</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-primary shrink-0 mt-1" size={20} strokeWidth={1.5} />
                    <div className="font-body text-sm text-muted-foreground">
                      <p className="text-foreground font-medium mb-1">Email</p>
                      <a href="mailto:journeyexports@gmail.com" className="hover:text-primary transition-colors">journeyexports@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-border bg-background rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border bg-background rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-border bg-background rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase py-3 rounded-sm hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
