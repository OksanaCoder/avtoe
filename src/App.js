import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Shop from './components/Shop/Shop'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     
      <Header />
      <Categories />
      <Shop />
    </>
  );
}

export default App;
