// import HomeBanner from "../components/HomeBanner";
// import HomePageBanner from "../components/HomeBanner";
import { FAQSection, FeaturedProductSection, HeroSection, MapTypesSection, PopularProductsSection, TestimonialsSection, WhyChooseUsSection } from "../components/HomeComponents";

export default function Home(){
    return(
      <main className="flex-1">
        <HeroSection />
        <MapTypesSection />
        <PopularProductsSection />
        <FeaturedProductSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        {/* Switched the components of section and Testimonial section */}
        <section className="py-20 md:py-28 parchment-texture relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-terracotta/5 blur-3xl"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold md:text-4xl" style={{ lineHeight: '70px' }}>
                Since 1995, DPS Map has led Myanmar's mapping and GIS services, supporting organizations like UNESCO, TomTom, and local governments.
              </h2>
            </div>
          </div>
        </section>
        
        <FAQSection />
      </main>
    )
}