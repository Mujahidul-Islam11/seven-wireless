const Featured = () => {
  return (
    <div className="px-4 md:px-20 container mx-auto my-16 text-black">
      <h3 className="text-2xl font-semibold text-center mb-6">
        Featured in biggest tech publications
      </h3>
      <div className="flex gap-8 justify-between">
        <img
          src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/lg0006.svg"
          alt=""
          className="w-[220px] opacity-40 hover:opacity-100
            "
        />
        <img
          src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/lg0005.svg"
          alt=""
          className="w-[220px] opacity-40 hover:opacity-100
            "
        />
        <img
          src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/lg0010.svg"
          alt=""
          className="w-[220px] opacity-40 hover:opacity-100
            "
        />
        <img
          src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/lg0009.svg"
          alt=""
          className="w-[220px] opacity-40 hover:opacity-100
            "
        />
      </div>
    </div>
  );
};

export default Featured;
