import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { HeroHeader } from './components/heroHeader/heroHeader';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<><HeroHeader /><ItemListContainer /></>} />
        <Route path="/category/:categoryid" element={<ItemListContainer />} />
        <Route path="/detalle/:productosId" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App