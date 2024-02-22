import ColorSelector from "./components/ColorSelector";
import Counter from "./components/Counter";
import styled from "styled-components";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <Wrapper className="App">
      <Counter />
      <hr />
      <ColorSelector />
      <hr />
      <SignUpForm />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  text-align: center;
  /* display: flex; */
  /* flex-direction: column; */
`;
