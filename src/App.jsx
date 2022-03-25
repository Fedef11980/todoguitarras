import "./App.css";
import ItemListContainer from "./Components/Listas/ItemListContainer";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./Components/Details/ItemDetailContainer";
import Contacto from "./Components/Contacto/Contacto";
import Nosotros from "./Components/Nosotros/Nosotros";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="ItemDetailContainer" element={<ItemDetailContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="Nosotros" element={<Nosotros />} />
        <Route path="Contacto" element={<Contacto />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
