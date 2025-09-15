import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import IdentifyTrain from './components/IdentifyTrain/index';
import IntensiveProgram from './components/IntensiveProgram/index';
import HeroSection from './components/HeroSection/index';
import CoFounders from './components/CoFounders/index';
import WhyPosspole from './components/WhyPosspole/index';


export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home" className="scroll-mt-16">
        <Banner />
      </section>
      <section id="about" className="scroll-mt-16">
        <Aboutus />
      </section>
      <section id="why-posspole" className="scroll-mt-16">
        <WhyPosspole />
      </section>
      <section id="identify" className="scroll-mt-16">
        <IdentifyTrain />
      </section>
      <section id="program" className="scroll-mt-16">
        <IntensiveProgram />
      </section>
      <section id="hero" className="scroll-mt-16">
        <HeroSection />
      </section>
      <section id="cofounders" className="scroll-mt-16">
        <CoFounders />
      </section>
    </main>
  )
}
