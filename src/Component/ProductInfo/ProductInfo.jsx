const ProductInfo = () => {
  return (
    <div className="px-4 md:px-12 container mx-auto my-20">
        {/* part 1 info */}
      <div
        className="hero md:h-[500px] rounded-2xl"
        style={{
          backgroundImage:
            "url(https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/Mask-group-6.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-20 rounded-2xl"></div>
        <div className=" text-white text-start">
          <div className="md:ml-[-480px] p-4">
            <h3 className="text-xl md:text-4xl mb-6 font-semibold">
              Designed for your comfort
            </h3>
            <p className="md:text-2xl">
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar <br />{" "}
              dapibus leo dolor sit amet consectetur adipiscing <br /> luctus
              nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero md:h-[500px] rounded-2xl mt-20"
        style={{
          backgroundImage:
            "url(https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/Mask-group-4.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-20 rounded-2xl"></div>
        <div className=" text-white text-start">
          <div className="md:mr-[-480px] p-4">
            <h3 className="text-xl md:text-4xl mb-6 font-semibold">
              Clear sound
            </h3>
            <p className="md:text-2xl">
              Tincidunt tristique ipsum. Integer eget ornare nisi, <br />{" "}
              suscipit porta orc. Donec suscipit mauris sit amet <br /> lobortis
              molestie. In hac habitasse platea dictumst. <br /> Duis eget
              maximus nibh, eu dapibus mauris.
            </p>
          </div>
        </div>
      </div>
      <div
        className="hero md:h-[500px] rounded-2xl mt-20"
        style={{
          backgroundImage:
            "url(https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/Mask-group-9.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-20 rounded-2xl"></div>
        <div className=" text-white text-start">
          <div className="md:ml-[-480px] p-4">
            <h3 className="text-xl md:text-4xl mb-6 font-semibold">
              Modern aesthetics
            </h3>
            <p className="md:text-2xl">
              Duis augue lorem, tincidunt sit amet nisl at, tincidunt <br /> tristique 
              ipsum. Integer eget ornare nisi, suscipit <br /> porta orc. Donec 
              suscipit mauris sit amet lobortis <br /> molestie. In hac habitasse 
              platea dictumst. Duis eget <br /> maximus nibh, eu dapibus mauris.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductInfo;
