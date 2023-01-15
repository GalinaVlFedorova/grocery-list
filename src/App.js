import './App.css';
import imageOne from "./shopping.webp";
import imageTwo from "./man.webp";
import { Grocery } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={imageOne} alt="shopping" width="200px"/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <Grocery/>
      <div className="container">
        <img src={imageTwo} alt="shopping" width="200px"/>
      </div>
    </div>
  );
}

export default App;
