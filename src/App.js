
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import TopCharacters from './Components/TopCharacters';
import Reviews from './Components/Reviews';
import GetFreeTrail from './Components/GetFreeTrail';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='bg-indigo-700'>
    <Navbar/>
    <Banner/>
    <TopCharacters/>
    <Reviews/>
    <GetFreeTrail/>
    <Footer/>
    </div>
  );
}

export default App;
