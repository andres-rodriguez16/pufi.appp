import s from '././Style/App.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import Carousel from './components/Carousel/Carousel';
function App() {
  return (
    <div className={s.app}>
      <Navbar/>
      {/* <Carousel/> */}
    </div>
  );
}

export default App;
