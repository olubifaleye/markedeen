
//Imports
import '@styles/globals.css';
import LandingPage from '@components/LandingPage';
import Services from '@components/Services';
import OurPhilosophy from '@components/OurPhilosophy';
import OnlinePresence from '@components/OnlinePresence';
import OutperformRivals from '@components/OutperformRivals';
import Process from '@components/Process';

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
    </div>
  )
}

export default Home