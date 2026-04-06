import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-beige">
      <Navbar scrollToSection={scrollToSection} />
      
      <main className="pt-16">
        {/* Home Section - Contains Hero + About + Timeline + Success Stories + Testimonials */}
        <section id="home">
          <Home />
        </section>

        {/* Services Section - Video Library */}
        <section id="services" className="py-8">
          <Services />
        </section>
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default AppRouter;
