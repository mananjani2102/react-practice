import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk"];

  return (
    <div>
      <h1>Healthy Food</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems items = {foodItems}></FoodItems>
    </div>
  );
}

export default App;
