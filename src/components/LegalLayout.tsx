import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type LegalSection = {
  heading: string;
  body: string[];
};

export default function LegalLayout({
  title,
  intro,
  sections,
  updated,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  updated: string;
}) {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero header */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/40 to-background pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs tracking-[0.3em] uppercase mb-4"
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            <span className="text-gradient-lime">{title}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            {intro}
          </motion.p>
          <p className="text-foreground/40 text-xs mt-6">Last updated: {updated}</p>
        </div>
      </section>

      {/* Body */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-foreground/60 text-sm md:text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 glass-card rounded-2xl p-8 text-center">
            <p className="text-foreground/60 text-sm md:text-base mb-4">
              Questions about this document?
            </p>
            <a
              href="mailto:Amorvipconcierge@gmail.com"
              className="text-gradient-lime font-medium tracking-wide hover:opacity-80 transition-opacity"
            >
              Amorvipconcierge@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
