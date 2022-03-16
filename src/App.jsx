import "./App.css";
import ItemCounter from "./Components/ItemCounter";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import "./Components/Guitars"
import ItemDetailContainer from "./Components/ItemDetailContainer";

function App() {
  const title = "Todo Guitarras";

  return (
    <div>
      <NavBar />
      <ItemListContainer titulo={title} />
      <ItemCounter />
      <ItemDetailContainer/>      


    </div>
  );
}

export default App;
