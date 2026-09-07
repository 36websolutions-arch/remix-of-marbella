import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock3, Mail, MessageCircle, Users, Ruler, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import HeroCarousel from "@/components/HeroCarousel";
import ShareButton, { slugify } from "@/components/ShareButton";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import yachtHeroStatic from "@/assets/yacht-hero-static.jpg";
import yachtGolden from "@/assets/yacht-golden-new.png";
import yachtTarela from "@/assets/yacht-tarela.png";
import yachtSundancer from "@/assets/yacht-sundancer.png";
import yachtAiconForever from "@/assets/yacht-aicon-forever.png";
import yachtCarbon1 from "@/assets/yacht-carbon-1.jpg";
import yachtCarbon2 from "@/assets/yacht-carbon-2.jpg";
import yachtCarbon3 from "@/assets/yacht-carbon-3.jpg";
import yachtCarbon4 from "@/assets/yacht-carbon-4.jpg";
import yachtMrsAmber from "@/assets/yacht-mrs-amber.png";
import yachtMahiMahi from "@/assets/yacht-mahi-mahi.png";
import yachtMalex from "@/assets/yacht-malex.png";
import yachtCranchi from "@/assets/yacht-cranchi.png";
import malexGallery1 from "@/assets/malex-gallery-1.jpg";
import malexGallery2 from "@/assets/malex-gallery-2.jpg";
import malexGallery3 from "@/assets/malex-gallery-3.jpg";
import malexGallery4 from "@/assets/malex-gallery-4.jpg";
import foreverGallery1 from "@/assets/forever-gallery-1.jpg";
import foreverGallery2 from "@/assets/forever-gallery-2.jpg";
import foreverGallery3 from "@/assets/forever-gallery-3.jpg";
import foreverGallery4 from "@/assets/forever-gallery-4.jpg";
import foreverGallery5 from "@/assets/forever-gallery-5.jpg";
import candelaGallery1 from "@/assets/candela-gallery-1.jpg";
import candelaGallery2 from "@/assets/candela-gallery-2.jpg";
import mangustaGallery1 from "@/assets/mangusta-gallery-1.jpg";
import mangustaGallery2 from "@/assets/mangusta-gallery-2.jpg";
import mangustaGallery3 from "@/assets/mangusta-gallery-3.jpg";
import mangustaGallery4 from "@/assets/mangusta-gallery-4.jpg";
import brisasGallery1 from "@/assets/yacht-brisas-gallery-1.jpg";
import yachtCoraje1 from "@/assets/yacht-coraje-1.jpg";
import yachtCoraje2 from "@/assets/yacht-coraje-2.jpg";
import yachtCoraje3 from "@/assets/yacht-coraje-3.jpg";
import yachtCoraje4 from "@/assets/yacht-coraje-4.jpg";
import yachtCoraje5 from "@/assets/yacht-coraje-5.jpg";
import yachtCoraje6 from "@/assets/yacht-coraje-6.jpg";
import yachtVibe from "@/assets/yacht-vibe.png";
import azimut39Gallery1 from "@/assets/yacht-azimut39-gallery-1.jpg";
import azimut39Gallery2 from "@/assets/yacht-azimut39-gallery-2.jpg";
import azimut39Gallery3 from "@/assets/yacht-azimut39-gallery-3.jpg";
import azimut39Gallery4 from "@/assets/yacht-azimut39-gallery-4.jpg";
import sunseekerPredator1 from "@/assets/yacht-sunseeker-predator-1.jpg";
import sunseekerPredator2 from "@/assets/yacht-sunseeker-predator-2.jpg";
import sunseekerPredator3 from "@/assets/yacht-sunseeker-predator-3.jpg";
import sunseekerPredator4 from "@/assets/yacht-sunseeker-predator-4.jpg";
import ferretti680_1 from "@/assets/yacht-ferretti-680-1.jpg";
import ferretti680_2 from "@/assets/yacht-ferretti-680-2.jpg";
import ferretti680_3 from "@/assets/yacht-ferretti-680-3.jpg";
import deantonioD34_1 from "@/assets/yacht-deantonio-d34-1.png";
import deantonioD34_2 from "@/assets/yacht-deantonio-d34-2.png";
import amanteBow from "@/assets/amante-yacht_marina_bow.jpg";
import amanteAft from "@/assets/amante-aft_deck_dining.jpg";
import amanteMaster from "@/assets/amante-master_bedroom.jpg";
import amanteCabin from "@/assets/amante-cabin_double_gold.jpg";
import amanteSunset from "@/assets/amante-sunset_family_lounging.jpg";
import amanteStern from "@/assets/amante-yacht_stern_amante.jpg";
import amanteToys from "@/assets/amante-yacht_with_watersports_toys.jpg";
import amanteAerial from "@/assets/amante-aerial_yacht_watersports.jpg";
import amanteDusk from "@/assets/amante-yacht_dusk_stern.jpg";
import ferretti68_1 from "@/assets/yacht-ferretti68-4.jpg";
import ferretti68_2 from "@/assets/yacht-ferretti68-1.jpg";
import ferretti68_3 from "@/assets/yacht-ferretti68-3.jpg";
import ferretti68_4 from "@/assets/yacht-ferretti68-5.jpg";
import ferretti68_5 from "@/assets/yacht-ferretti68-6.jpg";
import ferretti68_6 from "@/assets/yacht-ferretti68-2.jpg";
import ferretti68_7 from "@/assets/yacht-ferretti68-7.jpg";



const yachts = [
  {
    name: "AMANTE — PRINCESS F70",
    length: "21.5m",
    capacity: "12 passengers",
    capacityHighlight: true,
    description:
      "The brand-new Princess F70, flagship of the Flybridge range. Her 26.58m² flybridge offers a large U-shaped dining area, fully equipped wet bar and BBQ, a second cockpit and space for sun loungers aft. The aft galley opens fully to the cockpit for al fresco dining, with a walkthrough foredeck for extra sunbathing and Vector Fin stabilisers for a smooth ride. Captain Sol and her crew tailor every charter, with breakfast, a freshly prepared lunch by our award-winning chef and cocktail canapés, plus beers, wines, soft drinks and Champagne on arrival. Available for full day (8h), half day (4h), 6-hour charters, sunset Champagne cruises (2h) and berth drinks parties.",
    includes: [
      "Skipper & Crew",
      "Fuel",
      "Champagne on Arrival",
      "Breakfast & Chef-Prepared Lunch",
      "Cocktail Canapés",
      "Beers, Wines & Soft Drinks",
      "2x Seabob F5S",
      "Jet Ski",
      "Williams Jet Tender",
      "Paddle Boards",
      "Water Ski & Wakeboard",
      "Banana Boat & Donut",
      "Snorkelling Equipment",
    ],
    price: "Starting From €1,750",
    minCharter: "2 hour minimum (berth drinks party)",
    jetSki: true,
    images: [
      amanteBow,
      amanteAft,
      amanteMaster,
      amanteCabin,
      amanteSunset,
      amanteStern,
      amanteToys,
      amanteAerial,
      amanteDusk,
    ],
    premium: true,
  },
  {
    name: "MALEX",
    length: "31m",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Captain", "Fuel", "Cava", "Beers", "Soft Drinks", "Snacks"],
    price: "Starting From €6,050",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [malexGallery1, malexGallery2, malexGallery3, malexGallery4],
    premium: true,
  },

  {
    name: "MANGUSTA 80",
    length: "25.07m",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Champagne", "Wine", "Beers", "Sandwiches", "Fruit", "Jet Ski", "Paddle Board", "Donut", "Snorkel Equipment"],
    price: "Starting From €4,750",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [mangustaGallery1, mangustaGallery2, mangustaGallery3, mangustaGallery4],
    premium: true,
  },
  {
    name: "FERRETTI 68",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Captain & Crew", "Fuel", "Drinks", "Snacks", "Jet Ski"],
    price: "Starting From €4,500",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [ferretti68_1, ferretti68_2, ferretti68_3, ferretti68_4, ferretti68_5, ferretti68_6, ferretti68_7],
    premium: true,
  },
  {
    name: "FOREVER",
    length: "22m",
    capacity: "10 passengers",
    includes: ["Jet Ski", "Snacks", "Fruit Platter", "Beers", "Cava", "Soft Drinks"],
    price: "Starting From €2,500",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [foreverGallery1, foreverGallery2, foreverGallery3, foreverGallery4, foreverGallery5],
    premium: true,
  },
  {
    name: "FERRETTI YACHTS 680 FLY BRIDGE",
    length: "23.00m",
    capacity: "10 GUESTS (4 cabins / 8 guests sleeping)",
    includes: ["Underwater Lights", "Sun Deck", "Wi-Fi", "Swimming Platform"],
    price: "Starting From €2,800",
    minCharter: "4 hour minimum charter",
    images: [ferretti680_1, ferretti680_2, ferretti680_3],
    premium: true,
  },
  {
    name: "SUNSEEKER PREDATOR",
    length: "22.00m",
    capacity: "10 guests (4 cab) / 8 guests sleeping",
    includes: ["Jet Ski", "Padel", "Jellyfish-Proof Pool", "Hydraulic Platform"],
    price: "Starting From €2,500",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [sunseekerPredator4, sunseekerPredator2, sunseekerPredator3],
    premium: true,
  },
  {
    name: "CANDELA",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Cava", "Beers", "Wine", "Soft Drinks", "Snacks"],
    price: "Starting From €2,400",
    minCharter: "4 hour minimum charter",
    images: [candelaGallery1, candelaGallery2],
    premium: true,
  },
  {
    name: "BRISAS",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Snacks", "Wine", "Beer", "Cava", "Paddle Board", "Jet Ski"],
    price: "Starting From €1,850",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [brisasGallery1],
    premium: true,
  },
  {
    name: "VIBE",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Snacks", "Wine", "Beers", "Soft Drinks", "Paddle Board", "Jet Ski"],
    price: "Starting From €1,850",
    minCharter: "4 hour minimum charter",
    jetSki: true,
    images: [yachtVibe],
    premium: true,
  },
  {
    name: "CARBON RED",
    length: "11.5m",
    capacity: "10 passengers",
    includes: ["Snacks", "Soft Drinks", "Wine", "Beers", "Sea Bob Water Sports", "Fresh Towels", "Stability Control", "Owner's Cabin with Bathroom"],
    price: "Starting From €1,000",
    minCharter: "2 hour minimum charter",
    images: [yachtCarbon1, yachtCarbon2, yachtCarbon3, yachtCarbon4],
  },
  {
    name: "CORAJE",
    length: "25m",
    capacity: "11 passengers",
    includes: ["Snacks", "Wine", "Beers", "Soft Drinks", "Paddle Board x2"],
    price: "Starting From €1,000",
    minCharter: "2 hour minimum charter",
    images: [yachtCoraje1, yachtCoraje2, yachtCoraje3, yachtCoraje4, yachtCoraje5, yachtCoraje6],
  },
  {
    name: "AZIMUT 39",
    length: "12m",
    capacity: "12 passengers",
    capacityHighlight: true,
    includes: ["Snacks", "Wine", "Beer", "Soft Drinks", "Paddle Board"],
    price: "Starting From €850",
    minCharter: "2 hour minimum charter",
    images: [azimut39Gallery1, azimut39Gallery2, azimut39Gallery3, azimut39Gallery4],
  },
  {
    name: "CRANCHI",
    length: "12m",
    capacity: "9 passengers",
    includes: ["Captain", "Fuel", "Drinks", "Snacks"],
    price: "Starting From €680",
    images: [yachtCranchi],
  },
  {
    name: "D-fender",
    length: "10.47m",
    capacity: "12 GUESTS (2 double cabins)",
    includes: ["Paddleboard"],
    price: "Starting From €650",
    images: [deantonioD34_1, deantonioD34_2],
  },
  {
    name: "GOLDEN",
    length: "11.6m",
    capacity: "11 passengers",
    includes: ["Captain", "Fuel", "Drinks/Snacks"],
    price: "Starting From €550",
    images: [yachtGolden],
    featured: true,
  },
  {
    name: "MAHI MAHI",
    length: "12m",
    capacity: "11 passengers",
    includes: ["Captain", "Fuel", "Drinks", "Fishing Equipment"],
    price: "Starting From €550",
    images: [yachtMahiMahi],
  },
];

function YachtImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={name}
        draggable={false}
        className="w-full h-full object-cover select-none"
      />
    );
  }

  return (
    <div className="relative w-full h-full select-none touch-pan-y [-webkit-tap-highlight-color:transparent]">
      {/* Preload all images and show/hide based on current index */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${name} - Image ${idx + 1}`}
          draggable={false}
          className={`absolute inset-0 w-full h-full object-cover ${
            idx === currentIndex ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
        />
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors z-10 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors z-10 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      
    </div>
  );
}

function YachtCard({ yacht, index }: { yacht: typeof yachts[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const includedItems = [...yacht.includes];
  if (yacht.jetSki && !includedItems.some((i) => i.toLowerCase().includes("jet"))) {
    includedItems.push("Jet ski included");
  }

  return (
    <motion.div
      ref={ref}
      id={`yacht-${slugify(yacht.name)}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-charcoal border border-border hover:border-primary/60 transition-colors duration-500 h-full flex flex-col overflow-hidden scroll-mt-24"
    >
      <ShareButton
        path={`/yacht-charter#yacht-${slugify(yacht.name)}`}
        label={yacht.name}
        className="absolute top-4 left-4 z-20"
      />
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <div className="w-full h-full transition-transform duration-700 group-hover:scale-[1.03]">
          <YachtImageCarousel images={yacht.images} name={yacht.name} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none z-[2]" />
        <div className="absolute right-0 top-6 z-20 bg-background px-5 py-3 border-y border-l border-primary/30 text-left">
          <span className="block text-[9px] uppercase tracking-[0.28em] text-foreground/50">From</span>
          <span className="block text-lg font-semibold text-primary leading-tight">
            {yacht.price.replace(/^Starting From\s*/i, "")}
          </span>
        </div>
      </div>

      <div className="relative px-5 sm:px-7 pt-7 pb-6 flex flex-col flex-grow text-center">
        <div className="absolute top-0 left-7 right-7 h-px bg-primary/40" />
        {/* Name */}
        <h3 className="font-sans text-2xl md:text-3xl font-light uppercase tracking-[0.12em] text-foreground leading-tight">
          {yacht.name}
        </h3>

        {/* Specs */}
        <div className="grid grid-cols-3 py-6 mt-6 border-y border-border">
          <div className="flex flex-col items-center justify-center gap-1 px-2">
            <Ruler className="w-6 h-6 text-foreground mb-1" strokeWidth={1.5} />
            <span className="text-sm font-semibold uppercase text-foreground">{yacht.length || "—"}</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/45">Length</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-2 border-x border-border min-w-0">
            <Users className="w-6 h-6 text-foreground mb-1" strokeWidth={1.5} />
            <span className="text-xs sm:text-sm font-semibold uppercase text-foreground leading-tight line-clamp-2">{yacht.capacity}</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/45">Guests</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-2">
            <Clock3 className="w-6 h-6 text-foreground mb-1" strokeWidth={1.5} />
            <span className="text-xs sm:text-sm font-semibold uppercase text-foreground leading-tight line-clamp-2">
              {yacht.minCharter?.replace(/\s*minimum.*$/i, "") || "On request"}
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/45">Minimum</span>
          </div>
        </div>

        {/* Charter price */}
        <div className="py-7 border-b border-border">
          <span className="block text-[10px] uppercase tracking-[0.32em] text-foreground/70 mb-2">Private Yacht Charter</span>
          <div className="flex items-end justify-center gap-4 flex-wrap">
            <span className="text-3xl sm:text-4xl font-medium text-primary leading-none">
              From {yacht.price.replace(/^Starting From\s*/i, "")}
            </span>
            {yacht.minCharter && (
              <span className="text-xs uppercase tracking-[0.25em] text-foreground/70 pb-1">
                {yacht.minCharter.replace(/\s*minimum charter/i, "")}
              </span>
            )}
          </div>
        </div>

        {/* Included */}
        <div className="py-6 flex-grow">
          <div className="text-foreground tracking-[0.32em] uppercase text-[10px] mb-4">Included in your charter</div>
          <ul className="flex flex-wrap justify-center gap-x-0 gap-y-2 text-xs sm:text-sm text-foreground/80 leading-relaxed">
            {includedItems.map((item, i) => (
              <li key={item} className="flex items-center">
                <span className="px-2.5">{item}</span>
                {i < includedItems.length - 1 && <span className="text-foreground/35">|</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <a
            href={`mailto:Amorvipconcierge@gmail.com?subject=${encodeURIComponent(`${yacht.name} charter enquiry`)}`}
            className="min-h-12 inline-flex items-center justify-center gap-2 border border-primary text-foreground text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>Email enquiry</span>
          </a>
          <a
            href={`https://wa.me/34600250154?text=${encodeURIComponent(`Hi, I would like to check availability for ${yacht.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-12 inline-flex items-center justify-center gap-2 bg-gradient-lime text-primary-foreground text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Check availability</span>
          </a>
        </div>

        <div className="flex items-center gap-4 mt-7 text-[9px] uppercase tracking-[0.3em] text-foreground/35">
          <span className="h-px flex-1 bg-border" />
          <span>Luxury Charters&nbsp;&nbsp;|&nbsp;&nbsp;Marbella</span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>
    </motion.div>
  );
}

export default function YachtCharter() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src={malexGallery1} 
          alt="Luxury Yacht Charter" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />

        <div ref={heroRef} className="container mx-auto px-6 relative z-10 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase">Back to Services</span>
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-primary tracking-[0.4em] uppercase text-sm mb-4 drop-shadow-lg"
          >
            Luxury Fleet
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            Yacht <span className="text-gradient-lime">Charter</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-lg"
          >
            Experience the Mediterranean in ultimate luxury. Choose from our exclusive 
            fleet of yachts for an unforgettable journey along the Costa del Sol.
          </motion.p>

        </div>

      </section>

      {/* Yachts Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Our <span className="text-gradient-lime">Fleet</span>
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              All prices include IVA (VAT), Captain, crew, fuel, and docking fees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {yachts.map((yacht, index) => (
              <YachtCard key={yacht.name} yacht={yacht} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Ready to <span className="text-gradient-lime">Set Sail</span>?
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto mb-8">
              Contact our concierge team to customize your perfect yacht experience. 
              We'll handle every detail from catering to water sports.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <TestimonialsSlider />

      <Footer />
    </div>
  );
}
