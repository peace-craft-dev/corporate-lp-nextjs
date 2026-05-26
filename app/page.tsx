import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg text-ink">
        <Hero />
        <Why />
        <Services />
        <Process />
        <Showcase />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
