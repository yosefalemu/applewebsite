import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
      <nav className="flex items-center w-full screen-max-width">
        <img src={appleImg} alt="apple logo" width={14} height={14} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((navItem, i) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={i}
            >
              {navItem}
            </div>
          ))}
        </div>
        <div className="flex max-sm:flex-1 max-sm:justify-end gap-7">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
