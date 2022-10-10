import s from '././Style/App.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="app">
      <Navbar/>
      {/* <Carousel/> */}
      <Footer/>
    </div>
  );
}

export default App;
