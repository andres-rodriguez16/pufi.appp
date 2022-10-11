import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form.jsx';
import Carousel from './components/Carousel/Carousel.jsx';
import Card from './components/Card/Card.jsx';
import Mosaic from './components/Mosaic/Mosaic.jsx';

function App() {
  return (
    <div className="app">
      <div>
        <Navbar />
        <Carousel />
      </div>
      <Card />
      <Mosaic />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
