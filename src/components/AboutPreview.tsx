import { Link } from "react-router-dom";
import aboutBg from "@/assets/about-bg.jpg";

const AboutPreview = () => (
  <section className="section-padding">
    <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">About Us</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 leading-snug">
          Crafting Excellence Since Generations
        </h2>
        <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
          <p>
            At Journey Exports, just like the immaculate craftsmanship involved in handicraft manufacturing, we believe in precision, quality and a personalized touch of hand to deliver the best quality articles in the best possible manner.
          </p>
          <p>
            We take it upon ourselves to project the true artistic talents of this land around the world coupled with the best in class service in order to deliver a seamless and unparalleled experience to you.
          </p>
        </div>
        <Link
          to="/about"
          className="inline-block mt-8 font-body text-sm tracking-wider uppercase border-b-2 border-primary text-primary pb-1 hover:opacity-80 transition-opacity"
        >
          Learn More
        </Link>
      </div>
      <div className="relative">
        <img
          src={aboutBg}
          alt="Journey Exports handicraft collection"
          className="w-full rounded-sm shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default AboutPreview;
