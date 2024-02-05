import { ComponentProps } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  //! ComponentProps : Post 컴포넌트가 필요로 하는 props의 타입을 그대로 가져옴 !!!
  const post: ComponentProps<typeof Post>["post"] = {
    title: "title",
    content: "content",
  };

  return (
    <div>
      <Post post={post} />
    </div>
  );
}

export default App;
