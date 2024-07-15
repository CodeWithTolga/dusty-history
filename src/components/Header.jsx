import { Link } from "react-router-dom";
import MainLinks from "./MainLinks";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-around bg-slate-500">
      <Link to="/">
        <img src="/public/img/logo.png" alt="" className="w-[120px] h-[120px]"/>
      </Link>
      <MainLinks/>
    </div>
  );
};

export default Header;
