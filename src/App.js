import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Nav"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer greeting='Bienvenidos'/>
      </header>
    </div>
  );
}

export default App;
