import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-3 mx-auto max-w-6xl">
        <div className="flex gap-4">
          <MenuItem title="home" address="/" Icon={AiFillHome} />
          <MenuItem
            title="about"
            address="/about"
            Icon={BsFillInfoCircleFill}
          />
        </div>
        <div className="flex gap-5 items-center">
          <DarkModeSwitch />
          <Link href={"/"} className="flex gap-1 items-center">
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
