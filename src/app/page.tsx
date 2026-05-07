"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Beef, Fish, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="medium"
        background="grid"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Inicio",
          id: "hero",
        },
        {
          name: "Historia",
          id: "about",
        },
        {
          name: "Menú",
          id: "menu",
        },
        {
          name: "Contacto",
          id: "contact",
        },
      ]}
      brandName="La Segunda"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="La Segunda - Tradición Porteña"
      description="El alma de Villa del Parque. 19 años rescatando la esencia del bodegón con sabores mediterráneos y argentinos."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/table-assortment-with-plant-flat-lay_23-2148914892.jpg",
          imageAlt: "Bodegon Interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-shot-table-setting-with-wine-glasses-plates_181624-60149.jpg",
          imageAlt: "Bodegon Interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-plates-cutlery-glass_23-2148914882.jpg",
          imageAlt: "Bodegon Interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/baroque-style-with-watermelon-grapes_23-2149629944.jpg",
          imageAlt: "Bodegon Interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-red-poinsettia-arrangement_23-2149138730.jpg",
          imageAlt: "Bodegon Interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/conceptual-image-make-up-brushes-dinner-plate-black-background_482257-10036.jpg",
          imageAlt: "Bodegon Interior",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Más que un restaurante, un legado"
      description="Desde hace 19 años, somos el punto de encuentro de Pedro Lozano. Combinamos la calidez de un bodegón clásico con la excelencia de la cocina mediterránea."
      imageSrc="http://img.b2bpic.net/free-photo/signboard-restaurant-bistro-retro-vintage-toning-horizontal-food-urban-restaurant-concept_1220-1231.jpg"
      imageAlt="Historia de La Segunda"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Fish,
          title: "Mariscos frescos",
          description: "Selección diaria de la costa.",
        },
        {
          icon: Beef,
          title: "Carnes a la parrilla",
          description: "El sabor auténtico de nuestras brasas.",
        },
        {
          icon: Star,
          title: "Pastas caseras",
          description: "Recetas artesanales de tradición familiar.",
        },
      ]}
      title="Especialidades de la Casa"
      description="Nuestros platos reflejan nuestra historia."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Pulpo a la Gallega",
          price: "Consultar",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-cooked-mussels-plate-slate_23-2148234973.jpg",
        },
        {
          id: "2",
          name: "Ojo de Bife Selección",
          price: "Consultar",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-steak-with-salad_23-2148611069.jpg",
        },
        {
          id: "3",
          name: "Ravioles de Calabaza",
          price: "Consultar",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-chef-holding-hand-filled-pasta_23-2148343654.jpg",
        },
        {
          id: "4",
          name: "Pescado del Día",
          price: "Consultar",
          imageSrc: "http://img.b2bpic.net/free-photo/seabass-barramundi-fish-meat-steak_1203-9944.jpg",
        },
        {
          id: "5",
          name: "Entrecot al Malbec",
          price: "Consultar",
          imageSrc: "http://img.b2bpic.net/free-photo/red-gurza-side-view_141793-4512.jpg",
        },
        {
          id: "6",
          name: "Flan Casero",
          price: "Consultar",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-freshly-baked-lemon-muffins-topped-with-icing-top-view_166373-1539.jpg",
        },
      ]}
      title="Nuestro Menú"
      description="Sabores clásicos, ejecución premium."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "19",
          title: "Años de historia",
          description: "Creciendo con nuestro barrio.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-senior-man-holding-smartphone_23-2149356843.jpg",
        },
        {
          id: "2",
          value: "12",
          title: "Platos insignia",
          description: "Recetas que definen nuestra identidad.",
          imageSrc: "http://img.b2bpic.net/free-photo/cutted-beef-steak-cuisine-concept_53876-23368.jpg",
        },
        {
          id: "3",
          value: "6",
          title: "Días de atención",
          description: "Abiertos para que nos visites.",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-s-mores-dessert-composition_23-2149062779.jpg",
        },
      ]}
      title="Nuestra Historia en Números"
      description="Compromiso constante con la calidad."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Roberto M.",
          role: "Vecino",
          testimonial: "El mejor pulpo de Buenos Aires.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-spending-time-together_23-2149152906.jpg",
        },
        {
          id: "2",
          name: "Lucía P.",
          role: "Cliente",
          testimonial: "Un ambiente increíble y pastas excelentes.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-luxury-restaurant_23-2150598415.jpg",
        },
        {
          id: "3",
          name: "Carlos G.",
          role: "Asiduo",
          testimonial: "La atención es de primera clase.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-sitting-restaurant-medium-shot_23-2149930191.jpg",
        },
        {
          id: "4",
          name: "Ana R.",
          role: "Cliente",
          testimonial: "El lugar es mágico, la comida es arte.",
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-hipster-guy-dressed-denim-shirt-wearing-stylish-glasses_273609-6486.jpg",
        },
        {
          id: "5",
          name: "Julián S.",
          role: "Fan",
          testimonial: "19 años siendo los mejores.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-meeting-family-reunion_23-2149153754.jpg",
        },
      ]}
      title="Lo que dicen nuestros clientes"
      description="La experiencia de comer en casa."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contacto"
      title="Visítanos en Pedro Lozano 3700"
      description="Abierto Mar-Dom para almuerzo (12-15hs) y Mar-Sáb para cena (20-24hs). Tel: 011 4501-3842"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="La Segunda"
      columns={[
        {
          title: "Menú",
          items: [
            {
              label: "Especialidades",
              href: "#menu",
            },
          ],
        },
        {
          title: "Info",
          items: [
            {
              label: "Historia",
              href: "#about",
            },
            {
              label: "Contacto",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
