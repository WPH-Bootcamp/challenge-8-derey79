import { Layout } from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import Navbar from '../components/layout/Navbar';
import AboutSection from '../components/sections/AboutSection';
// import BrandMarquee from '../components/sections/BrandMarquee';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Layout>
        {/* <Navbar /> */}
        <main>
          <HeroSection />
          <AboutSection />
          {/* <BrandMarquee /> */}
        </main>

        {/* <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer /> */}
      </Layout>
    </div>
  );
};

export default Home;
