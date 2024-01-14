
//Imports
import '../styles/globals.css';
import LandingPage from '@components/LandingPage';
import Services from '@components/Services';
import OurPhilosophy from '@components/OurPhilosophy';
import OnlinePresence from '@components/OnlinePresence';
import OutperformRivals from '@components/OutperformRivals';
import Process from '@components/Process';
import Contact from '@components/Contact';
import SuccessQuotes from '@components/SuccessQuotes';

// Set metadata for Landing Page
export const metadata = {
  title: "Markedeen",
  description: "Markedeen goes beyond the realms of traditional marketing — we're your end-to-end business growth partner"
}

//Page component to house other "page" components for single page web application
const Home = () => {
  return (
    <div className='main'>
      <LandingPage />
      <Services />
      <OurPhilosophy />
      <OnlinePresence />
      <OutperformRivals />
      <Process />
      <Contact />
      <SuccessQuotes />
    </div>
  )
}

export default Home