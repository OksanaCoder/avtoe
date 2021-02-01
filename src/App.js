import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Shop from './components/Shop/Shop'
import Advantages from './components/Advantages/Advantages'
import MobApp from './components/MobApp/MobApp'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     
      <Header />
      <Categories />
      <Shop />
      <Advantages />
      <MobApp />
    </>
  );
}

export default App;
