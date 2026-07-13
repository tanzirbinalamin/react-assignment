import logo from "../assets/TechWave.png";
import arrow from "../assets/ArrowRight.png";
import menu from "../assets/hamburger-menu.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-around items-center bg-slate-900/30 backdrop-blur-md py-2 z-50" >
      <img src={logo} alt="TechWave" width={220} height={30} />

      <ul className="flex gap-4 items-center">
        
        <li><Link to="/home" className="text-white font-bold" href="#">Home</Link></li>
        <li><Link to="/About" className="text-white font-bold" href="#">About</Link></li>
        <li><Link className="text-white font-bold" href="#">Episodes</Link></li>
        <li><Link to="/Choose" className="text-white font-bold" href="#">Choose</Link></li>
      </ul>

      <button className="bg-indigo-950 hover:bg-slate-700 transition-colors duration-300 ease-in-out text-neutral-50 font-bold rounded-3xl py-2 px-4 flex items-center gap-2">
        Subscribe
        <img src={arrow} alt="" />
      </button>

      <img className="manu hidden" src={menu} alt="menu" />
    </nav>
  );
}

export default Navbar;