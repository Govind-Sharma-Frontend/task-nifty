import Image from "next/image";

import circle from "@/@core/assets/header-circle.png";
import youtubeThumbnail from "@/@core/assets/youtube-video-thumbnail.png";
import youtubeThumbnailMobile from "@/@core/assets/youtube-video-thumbnail2.png";

const HeaderSection = () => {
  return (
    <>
      <header
        className="relative z-10 overflow-hidden "
        style={{
          background: "linear-gradient(90deg, #FFC7C7 0%, #0AA6D7 100%)",
        }}
      >
        <Image
          src={circle}
          alt="header circle"
          className="absolute z-0 w-2/5"
        />

        <div className="py-40 pb-0 lg:pb-40 container z-20 sticky mx-auto lg:px-14 ">
          <div className="grid lg:grid-cols-2 items-center gap-36">
            <div className="text-center lg:text-left px-4">
              <h1 className="text-white text-2xl lg:text-5xl font-semibold uppercase">
                Stock Screening Simplifed!
              </h1>
              <div className="lg:pr-52">
                <p className="text-white text-lg my-4 lg:my-8 text-center lg:text-left">
                  Find Winning Stock Faster with Nifty Trader's Advanced Stock
                  Screening Tool
                </p>
              </div>

              <button className=" bg-deepSkyBlue hover:bg-transparent px-8 py-3 text-white hover:text-deepSkyBlue transition-colors duration-500 font-semibold text-xl rounded border-2 border-deepSkyBlue ">
                Free Trial
              </button>
            </div>
            <div>
              <Image
                src={youtubeThumbnail}
                alt="Youtube thumbnail"
                className="w-3/4 ml-auto hidden lg:block"
              />
            </div>
          </div>
        </div>
      </header>
      <div>
        <Image
          src={youtubeThumbnailMobile}
          alt="Youtube thumbnail"
          className="w-full visible lg:hidden max-h-[420px] object-cover object-center"
        />
      </div>
    </>
  );
};

export default HeaderSection;
