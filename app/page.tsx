import { Navbar } from "@/components/Navbar";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Dashboard } from "@/components/Dashboard";
import { Testimonials } from "@/components/Testimonials";
import { Subscribe } from "@/components/Subscribe";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Dashboard />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  );
}

