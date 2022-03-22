import "./App.css";
import ItemCounter from "./Components/Counter/ItemCounter";
import ItemListContainer from "./Components/Listas/ItemListContainer";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./Components/Details/ItemDetailContainer"
import ItemDetails from "./Components/Details/ItemDetails";
import Contacto from "./Components/Contacto/Contacto";
import Nosotros from "./Components/Nosotros/Nosotros";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer/> }/>
        <Route path="/productos/:categoryId" element={<ItemListContainer/>} />
        <Route path= "/detail/:itemId" element={<ItemDetailContainer/>} />      
        <Route path="ItemDetailContainer" element={<ItemDetailContainer/> }/>
        <Route path="Contacto" element ={<Contacto/> }/>
        <Route path="Nosotros" element={<Nosotros/> }/>
        <Route path="ItemDetails" element={<ItemDetails/> }/>
        <Route path="ItemCounter" element={ <ItemCounter/> }/>    
        <Route path="*" element={<Navigate to="/"/> }/> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
