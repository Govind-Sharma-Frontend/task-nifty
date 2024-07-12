import Image from "next/image";
import Logo from "@/@core/assets/Logo.png";

const Navigation = () => {
  return (
    <div
      className="bg-gray-400 fixed z-50  py-3 w-full top-0 border-b "
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.40) 100%, rgba(0, 0, 0, 0.30) 100%, rgba(17, 17, 17, 0.40) 100%)",
      }}
    >
      <div className="container mx-auto px-4 lg:px-14">
        <div className="flex justify-between align-middle">
          <Image src={Logo} alt="Website logo" className="w-44 lg:w-44 " />
          <button className="bg-transparent rounded-md px-2 lg:px-8 py-0 border-white border-2 text-white text-sm lg:text-lg font-medium">
            <a href="https://www.niftytrader.in/" target="_blank">
              Visit Website
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
