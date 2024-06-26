import { Button } from "keep-react";
import LogoBuilding from "../assets/office-building.png"
import { DropdownComponent } from "../utils/Dropdown";

const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-slate-300 text-xl h-16">
      <div className="mx-32 flex items-center gap-2 ">
        
        <img src={LogoBuilding} className="w-12 h-12" alt=""></img>
        <h1 className="text-2xl font-bold">Hustler</h1>
      </div>
      <ul className="flex items-center gap-20 *:">
        <li className="hover:scale-110 cursor-pointer ">Home</li>
        <li className="hover:scale-110 cursor-pointer ">About</li>
        <DropdownComponent  />
      </ul>

      <div className="flex gap-2 mx-12">
        {" "}
        <Button color="success">Sign up</Button>
        <Button color="error">Log in</Button>
      </div>
    </nav>
  );
};

export default Header;
