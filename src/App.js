
import { Route, Routes } from 'react-router-dom';
import Body from './Components/Body';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import CartDetails from './Components/CartDetails';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
    <Route path='/home' element={ <Body/>}/>
    <Route path='/cart' element={<CartDetails/>}/>
    </Routes>
  <Footer/>
    </div>
  );
}

export default App;
