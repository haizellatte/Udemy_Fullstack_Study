import { Provider } from "react-redux";
import ShoppingCart from "./pages/ShoppingCart";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
}

export default App;
