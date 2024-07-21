import { Link } from "react-router-dom";
import MainLinks from "./MainLinks";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-around bg-[#7d4b35]">
      <Link to="/">
        <img src="/public/img/logo.png" alt="" className="w-[100px] h-[100px]"/>
      </Link>
      <MainLinks/>
    </header>
  );
};

export default Header;
