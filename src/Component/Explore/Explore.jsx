const Explore = () => {
  return (
    <div
      className="hero min-h-screen my-16 md:w-[1182px] rounded-2xl mx-auto"
      style={{
        backgroundImage:
          "url(https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/12/pexels-pavel-danilyuk-8000592-1-1.jpg)",
          backgroundSize: 'cover'
      }}
    >
      <div className="hero-content bg-black w-full rounded-2xl h-full bg-opacity-30 text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Experience the power of <br /> Seven Wireless!</h1>
          <button className="btn btn-primary rounded-full">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
