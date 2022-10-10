import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form.jsx';
import Suscribite from './components/Form/Suscribite.jsx';

function App() {
  return (
    <div className="app">
      <Navbar/>
      {/* <Carousel/> */}
      <Suscribite/>
     <Form/>
      <Footer/>
    </div>
  );
}

export default App;
