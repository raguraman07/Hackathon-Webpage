import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Prizes } from './components/Prizes';
import { Schedule } from './components/Schedule';
import { CampusNavigation } from './components/CampusNavigation';
import { Rules } from './components/Rules';
import { Judging } from './components/Judging';
import { SpeakersMentors } from './components/SpeakersMentors';
import { Sponsors } from './components/Sponsors';
import { Organizers } from './components/Organizers';
import { FAQ } from './components/FAQ';
import { ContactVenue } from './components/ContactVenue';
import { Footer } from './components/Footer';
import { HACKATHON_DETAILS } from './data/hackathonData';

export function App() {
  const handleOpenRegister = () => {
    if (HACKATHON_DETAILS.registrationUrl) {
      window.open(HACKATHON_DETAILS.registrationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FFD400] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Page Content Sections */}
      <main>
        <Hero onOpenRegister={handleOpenRegister} />
        <About />
        <Timeline />
        <Prizes />
        <Schedule />
        <CampusNavigation />
        <Rules />
        <Judging />
        <SpeakersMentors />
        <Sponsors />
        <Organizers />
        <FAQ />
        <ContactVenue />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
