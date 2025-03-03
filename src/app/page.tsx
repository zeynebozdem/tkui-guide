import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import ComponentShowcase from "@/components/ComponentShowcase";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />
        <ComponentShowcase />
        <FAQ />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
