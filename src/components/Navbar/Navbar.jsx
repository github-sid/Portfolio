import Social from "../Social/Social";
import logo from "../../assets/logo.png"

export default function Navbar() {
  return (
    <nav className=" mb-3 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center text-3xl ">
     
        <img className= "mx-2 w-15 h-14" src={logo}/>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Social />
      </div>
    </nav>
  );
}
