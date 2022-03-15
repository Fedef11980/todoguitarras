import "./App.css";
import ItemCounter from "./Components/ItemCounter";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  const title = "Todo Guitarras";

  return (
    <div>
      <NavBar />
      <ItemListContainer titulo={title} />
      <ItemCounter />
      


    </div>
  );
}

export default App;
