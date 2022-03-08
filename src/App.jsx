import "./App.css";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  const title = "Todo Guitarras";

  return (
    <div>
      <NavBar />
      <ItemListContainer titulo={title} />
    </div>
  );
}

export default App;
