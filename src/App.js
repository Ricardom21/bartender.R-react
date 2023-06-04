import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer props="¡Hola, bienvenido a Bartender.R!" />
    <Footer />
    </>
  );
}


export default App;
