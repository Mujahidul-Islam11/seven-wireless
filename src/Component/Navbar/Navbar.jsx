import { HiBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="bg-black fixed bg-opacity-20 shadow-xl z-10 py-4 w-full">
      <div className="flex justify-between md:w-[1300px] mx-auto">
        {/* Nav logo here */}
        <div>
          <img
            src="https://i.ibb.co/Jpk4fzY/Screenshot-62-removebg-preview.png"
            alt="seven wireless logo"
            className="h-10"
          />
        </div>

        {/* Nav routes here */}
        <div>
          <nav>
            <HiBars3BottomLeft className="text-5xl text-white"></HiBars3BottomLeft>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
