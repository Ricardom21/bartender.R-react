import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { HeroHeader } from './components/heroHeader/heroHeader';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./context/ShoppingCartContext";
import Cart from './components/Cart/Cart';

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
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App