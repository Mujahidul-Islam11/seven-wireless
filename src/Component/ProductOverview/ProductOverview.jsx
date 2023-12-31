const ProductOverview = () => {
  return (
    <div className="my-40">
      <div className="md:flex justify-center gap-20 items-center mb-20 md:mb-28">
        <img
          src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/12/pexels-pavel-danilyuk-8000592-1-1.jpg"
          alt=""
          className="w-[404px] rounded-3xl shadow-2xl"
        />
        <div className="text-gray-600">
          <h3 className="text-2xl md:text-4xl font-semibold mb-6 text-black">Innovations</h3>
          <p className="text-xl md:text-2xl mb-6">
            Ullamcorper mattis, pulvinar dapibus leo dolor sit amet <br />
             consectetur
            adipiscing luctus nec ullamcorper mattis, pulvinar <br /> dapibus leo elit
            tellus luctur.
          </p>
          <ol className="space-y-4">
            <li>Transparency Mode</li>
            <li>Active Noise Cancelling</li>
            <li>Ultra Light Carrying Case</li>
          </ol>
        </div>
      </div>
      <div className="md:flex justify-center gap-20 items-center">
        <div className="text-gray-600">
          <h3 className="text-2xl md:text-4xl font-semibold mb-6 text-black">Technology of the future</h3>
          <p className="text-xl md:text-2xl mb-6">
            Ullamcorper mattis, pulvinar dapibus leo dolor sit amet <br />
             consectetur
            adipiscing luctus nec ullamcorper mattis, pulvinar <br /> dapibus leo elit
            tellus luctur.
          </p>
        </div>
        <img
          src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/12/Mask-group-10.jpg"
          alt=""
          className="w-[404px] rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ProductOverview;
