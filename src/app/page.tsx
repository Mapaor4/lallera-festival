import NavBar from '@/components/NavBar';
import Inici from '@/components/Inici';
import ElFestival from '@/components/ElFestival';
import Bases from '@/components/Bases';
import FAQs from '@/components/FAQs';
import Organitzacio from '@/components/Organitzacio';
import Patrocinadors from '@/components/Patrocinadors';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <main>
        <Inici />
        <ElFestival />
        <Bases />
        <FAQs />
        <Organitzacio />
        <Patrocinadors />
      </main>
      <Footer />
    </div>
  );
}
