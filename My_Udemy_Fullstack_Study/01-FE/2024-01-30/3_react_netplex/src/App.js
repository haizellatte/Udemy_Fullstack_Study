import styled from "styled-components";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <Header />
      <ItemList />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 0 30px;
`;
