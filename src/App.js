import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header-1'
import Categories from './components/Categories/Categories'
import Shop from './components/Shop/Shop'
import Advantages from './components/Advantages/Advantages'
import MobApp from './components/MobApp/MobApp'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     
      <Header />
      <Categories />
      <Shop />
      <Advantages />
      <MobApp />
      <Footer />
    </>
  );
}

export default App;
