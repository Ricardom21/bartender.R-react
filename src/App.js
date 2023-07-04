import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { HeroHeader } from './components/heroHeader/heroHeader';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./context/ShoppingCartContext";
import Cart from './components/Cart/Cart';
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
        <Route path="/" element={<><HeroHeader /><ItemListContainer /></>} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/detalle/:productosId" element={<ItemDetailContainer />} />
          <Route path= "/Cart" element= {<Cart/>}/>
          <Route path= "/Contacto" element= {<Contacto/>}/>

        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App