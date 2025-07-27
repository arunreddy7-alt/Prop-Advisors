import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import ProjectAmodha from './components/ProjectAmodha';
import ProjectShriRamGharunda from './components/ProjectShriRamGharunda';
import ProjectAdoraDeGoa from './components/ProjectAdoraDeGoa';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <ProjectAmodha />
      <ProjectShriRamGharunda />
      <ProjectAdoraDeGoa />
      <ContactSection />
      <Footer />
    </>
  );
}
