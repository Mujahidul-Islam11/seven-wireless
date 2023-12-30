import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={'/'}>
      <h3 className="text-2xl md:text-3xl text-black cursor-pointer hover:text-[#405ED2] mb-4 md:mb-8">
        Home
      </h3>
      </NavLink>
      <NavLink to={'/about'}>
      <h3 className="text-2xl md:text-3xl text-black cursor-pointer hover:text-[#405ED2] mb-4 md:mb-8">
        About Us
      </h3>
      </NavLink>
      <NavLink to={'shop'}>
      <h3 className="text-2xl md:text-3xl text-black cursor-pointer hover:text-[#405ED2] mb-4 md:mb-8">
        Shop
      </h3>
      </NavLink>
      <NavLink to={'news'}>
      <h3 className="text-2xl md:text-3xl text-black cursor-pointer hover:text-[#405ED2] mb-4 md:mb-8">
        News
      </h3>
      </NavLink>
      <NavLink to={'contact'}>
      <h3 className="text-2xl md:text-3xl text-black cursor-pointer hover:text-[#405ED2] mb-4 md:mb-8">
        Contact
      </h3>
      </NavLink>
    </>
  );
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
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button">
                  <HiBars3BottomLeft className="text-5xl cursor-pointer text-white"></HiBars3BottomLeft>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 pl-6 md:pl-16 w-80 md:w-[500px] min-h-full bg-white text-base-content">
                  {/* Sidebar content here */}
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  >
                    <div className="flex justify-end pr-6">
                      <h3 className="text-2xl border-2 hover:border-gray-400 block px-2 rounded-full cursor-pointer text-gray-300 hover:text-gray-400">
                        X
                      </h3>
                    </div>
                  </label>
                  <div className=" mt-4 md:mt-8">{links}</div>
                  <div className="flex gap-6 mt-10 md:mt-40">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61552796227649">
                      <FaFacebook className="text-3xl text-black hover:text-[#405DE2] cursor-pointer "></FaFacebook>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mohammaddinardd/?hl=en">
                    <FaInstagram className="text-3xl text-black hover:text-[#405DE2] cursor-pointer "></FaInstagram>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCDipjdwutFyGyORqh9OKMBg">
                    <FaYoutube className="text-3xl text-black hover:text-[#405DE2] cursor-pointer "></FaYoutube>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
