import { useState } from "react";
import { Wrapper } from "./SideBarStyle";

function Sidebar() {
  const [color, setColor] = useState("Pink");

  const HandleClick = (e) => {
    setColor(e.target.innerText);
  };

  return (
    <Wrapper color={color}>
      <div>
        <button onClick={HandleClick}>Pink</button>
        <button onClick={HandleClick}>Red</button>
        <button onClick={HandleClick}>Orange</button>
        <button onClick={HandleClick}>Yellow</button>
        <button onClick={HandleClick}>Green</button>
        <button onClick={HandleClick}>Blue</button>
        <button onClick={HandleClick}>Purple</button>
      </div>
    </Wrapper>
  );
}

export default Sidebar;
