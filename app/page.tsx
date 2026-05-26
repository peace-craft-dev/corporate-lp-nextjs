import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <section id="contact" className="bg-peace-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-peace-900 mb-8 text-center">
            お問い合わせ
          </h2>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
