import Header from "../Header";
import Sidebar from "../Sidebar";
import { Wrapper } from "./LayoutStyle";

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      {/* tailwind의 1 === 4px이다. */}
      {/* px말고 다른 단위를 사용하고 싶다면 '대괄호'를 사용한다 👉 px-[20rem] text-[#ffff]*/}
      <main className="px-14 py-20 ">{children}</main>
    </Wrapper>
  );
}

export default Layout;
