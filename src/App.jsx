import "./App.css";
import ItemCounter from "./Components/Counter/ItemCounter";
import ItemListContainer from "./Components/Listas/ItemListContainer";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./Components/Details/ItemDetailContainer"
import ItemDetails from "./Components/Details/ItemDetails";

function App() {
  const title = "Todo Guitarras";

  return (
    <div>
      <NavBar />
      <ItemListContainer titulo={title} />
      <ItemCounter />
      <ItemDetailContainer/>   
      <ItemDetails/>   


    </div>
  );
}

export default App;
