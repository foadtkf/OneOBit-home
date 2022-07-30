import logo from './logo.svg';
import './App.css';
import WalletCard from './Components/WalletCard';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

function App() {
  return (
    <div className='bg-indigo-700'>
    <Navbar/>
    <Banner/>
      <WalletCard/>
    </div>
  );
}

export default App;
