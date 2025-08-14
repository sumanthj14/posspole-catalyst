import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import IdentifyTrain from './components/IdentifyTrain/index';
import IntensiveProgram from './components/IntensiveProgram/index';


export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section id="home" className="scroll-mt-20">
        <Banner />
      </section>
      <section id="about" className="scroll-mt-20">
        <Aboutus />
      </section>
      <section id="identify" className="scroll-mt-20">
        <IdentifyTrain />
      </section>
      <section id="program" className="scroll-mt-20">
        <IntensiveProgram />
      </section>
    </main>
  )
}
