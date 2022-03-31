import "./App.css";

import ItemListContainer from "./Components/Listas/ItemListContainer";
import ItemDetailContainer from "./Components/Details/ItemDetailContainer";

import NavBar from "./Components/NavBar";
import Contacto from "./Components/Contacto/Contacto";
import Nosotros from "./Components/Nosotros/Nosotros";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CustomCartContext } from "./Context/CustomCartContext";
import { Cart } from "./Components/Cart/Cart";
import { FirebaseComponent } from "./Components/FirebaseComponent";

const App = () => {
  return (
    <CustomCartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="ItemDetailContainer" element={<ItemDetailContainer />} />
          <Route
            path="/productos/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="Nosotros" element={<Nosotros />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="firebase" element={<FirebaseComponent />} />
        </Routes>
      </BrowserRouter>
    </CustomCartContext>
  );
};

export default App;
