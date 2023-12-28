const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/VLP9DFy/man-woman-headphones-contemplating.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="text-white container mx-auto mt-20 md:mt-7 px-4 md:block">
        <h3 className="text-3xl md:text-8xl font-semibold">
          Wireless Technology <br /> of Tomorrow
        </h3>
        <div className="flex items-center mt-10 gap-6 md:gap-20">
          <div className="md:flex items-center gap-3">
            <img
              src="https://i.ibb.co/nRfnnnX/Screenshot-64-removebg-preview.png"
              alt=""
            />
            <h3 className="md:text-2xl font-semibold">Transparency mode</h3>
          </div>
          <div className="md:flex items-center gap-3">
            <img
              src="https://i.ibb.co/yVt5rbB/Screenshot-65-removebg-preview.png"
              alt=""
            />
            <h3 className="md:text-2xl font-semibold">Active noise cancelling</h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
