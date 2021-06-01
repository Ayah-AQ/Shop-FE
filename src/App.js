import Home from "./components/home";
import Dataproducts from "./components/dataproducts";
import Products from "./components/products"
import Animelist from "./components/animelist"
import './App.css';
function App() {
    
    return (  
    <div className = "App" >
        
        <Home />
        <Animelist />
      <Products />  

        </div>
    );
}
export default App;