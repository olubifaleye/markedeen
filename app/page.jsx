
//Imports
import '@styles/globals.css';
import LandingPage from '@components/LandingPage';
import Services from '@components/Services';

//Page component to house other "page" components for single page web application
const Home = () => {
  return (
    <div className='main'>
      <LandingPage />
      {/* <Services /> */}
    </div>
  )
}

export default Home