import "./App.module.scss";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Timer />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
