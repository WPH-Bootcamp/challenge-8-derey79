// import { Layout } from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
// import ServicesSection from '../components/sections/ServicesSection';
// import IndustySection from '../components/sections/IndustySection';
const Home = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      {/* <Layout> */}
      {/* <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <IndustySection />
        </main> */}

      {/* <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer /> */}
      {/* </Layout> */}
    </div>
  );
};

export default Home;
