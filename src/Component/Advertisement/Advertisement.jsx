const Advertisement = () => {
  return (
    <div className="flex gap-8 justify-between items-center px-4 md:px-28 container mx-auto text-black">
      <div className="items-center">
        <img
          src="https://i.postimg.cc/85rcLbDY/electrical-charging-station-icon-617585-1877.jpg"
          alt="" className="w-[87px] h-[79px] mb-6"
        /> 
        <h3 className="text-xl font-semibold">48h battery life</h3>
      </div>
      <div className="items-center">
        <img src="https://i.ibb.co/yVt5rbB/Screenshot-65-removebg-preview.png" alt="" className="w-[87px] h-[79px] mb-6" />
        <h3 className="text-xl font-semibold">Active noise <br /> cancelling</h3>
      </div>
      <div className="items-center">
        <img src="https://i.postimg.cc/VNvdk8hm/images.png" alt="" className="w-[87px] h-[79px] mb-6" />
        <h3 className="text-xl font-semibold">
          Compatible with <br /> Apple & Android
        </h3>
      </div>
      <div className="items-center">
        <img src="https://i.postimg.cc/SKPjXP08/download.png" alt="" className="w-[87px] h-[79px] mb-6" />
        <h3 className="text-xl font-semibold">3 years worldwide <br /> warranty</h3>
      </div>
    </div>
  );
};

export default Advertisement;
