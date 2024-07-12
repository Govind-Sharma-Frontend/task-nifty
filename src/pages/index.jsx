import Image from "next/image";

import Navigation from "@/components/navigation";
import { FAQData, marketInsightData } from "@/db";
import HeaderSection from "@/views/header";
import HomeSlider from "@/views/home-slider";
import BGImage from "@/@core/assets/outdated-bg.jpg";
import PricingTable from "@/views/pricing-table";
import ClientTestimonials from "@/views/client-testimonials";

import facebookIcon from "@/@core/assets/social-media-icons/facebookIcon.png";
import instagramIcon from "@/@core/assets/social-media-icons/instagramIcon.png";
import twitterIcon from "@/@core/assets/social-media-icons/twitterIcon.png";
import linkedInIcon from "@/@core/assets/social-media-icons/linkedInIcon.png";
import YTIcon from "@/@core/assets/social-media-icons/youtubeIcon.png";
import telegramIcon from "@/@core/assets/social-media-icons/telegramIcon.png";
import FAQs from "@/views/faqs";
import QueryStatsIcon from "@/@core/assets/queryStatsIcon";

export default function Home() {
  const socialMediaIcons = [
    { link: "https://facebook.com", icon: facebookIcon },

    { link: "https://instagram.com", icon: instagramIcon },

    { link: "https://x.com/?lang=en-in", icon: twitterIcon },

    { link: "https://in.linkedin.com/", icon: linkedInIcon },

    { link: "https://youtube.com", icon: YTIcon },

    { link: "https://web.telegram.org/a/", icon: telegramIcon },
  ];

  return (
    <>
      <Navigation />
      <HeaderSection />

      <section className="container mx-auto text-center px-4 py-16">
        <h1 className="text-darkSlateGray text-2xl lg:text-4xl font-semibold uppercase">
          The Ultimate Destination For Stock Market Insight
        </h1>
        <p className="text-darkSlateGray text-lg lg:text-xl my-4">
          Join 1 million Traders & Investors who trust Nifty Trader for smart
          trading & real-time stock insights.
        </p>

        <button className=" bg-transparent px-8 py-3 text-darkSlateGray   font-semibold text-sm lg:text-lg rounded border-2 border-darkSlateGray ">
          Explore Features
        </button>
      </section>

      <HomeSlider />

      <div className="container mx-auto  my-10 px-4 lg:px-14">
        <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:justify-between overflow-auto">
          {marketInsightData?.map((item, index) => {
            const Icon = item?.icon;
            return (
              <div className="hover:shadow-custom min-w-[300px]  transition-all duration-300 p-4 rounded-lg h-full hover-me">
                <Icon />
                <h3 className="text-xl font-semibold text-darkSlateGray my-3 ">
                  {item?.title}
                </h3>
                <p className="text-darkGray text-sm text-balance break-words">
                  {item?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto mt-12  lg:px-14">
        <div
          className=" px-4 lg:px-14 lg:py-10 shadow-custom my-5 rounded bg-no-repeat lg:bg-right lg:bg-contain bg-cover bg-bottom "
          style={{
            backgroundImage: `url('${BGImage.src}')`,
          }}
        >
          <div className="grid lg:flex justify-center lg:justify-between items-center py-10 lg:py-0">
            <div className="text-center lg:text-left">
              <h2 className="text-white  lg:text-darkSlateGray text-2xl lg:text-4xl font-bold">
                Missing Trades Because of Outdated Data?
              </h2>
              <p className="text-lg text-white  lg:text-darkSlateGray my-5">
                Get the Live Market Screening with Dynamic Filters
              </p>
            </div>
            <button className="BG-darkSlateGrayGradient mx-auto lg:mx-0 hover:bg-transparent hover:border-2 border-darkSlateGray2 text-white hover:text-darkSlateGray2 transition-colors duration-100 text-lg w-fit lg:w-auto font-bold px-4 lg:px-10 py-5 rounded">
              Get Free Trial
            </button>
          </div>
        </div>
      </div>

      <ClientTestimonials />
      <h2 className="text-darkSlateGray font-bold my-5 text-center text-2xl lg:text-4xl">
        Pricing Plan
      </h2>
      <PricingTable />

      <div className="mb-24">
        <FAQs data={FAQData} />
      </div>

      <footer className="w-full mt-10 py-24 lg:mb-10 bg-center">
        <div className="container mx-auto px-4 lg:px-14 ">
          <div className="w-full  md:w-[450px] text-center ml-auto mr-32 ">
            <span className="text-darkSlateGray text-2xl lg:text-4xl">
              Screening Like a Pro with{" "}
            </span>{" "}
            <br />
            <h5 className="text-darkSlateGray text-2xl lg:text-4xl font-semibold my-2">
              Nifty Trader
            </h5>
            <p className="text-darkGray text-lg">
              Stop wasting time and start winning! Get access to Nifty Trader's
              Stock Screeners today!
            </p>
            <button className="bg-cornFlowerBlue text-white px-4 lg:px-16 mt-10 py-5 text-lg lg:text-2xl font-semibold  rounded">
              {" "}
              Start Free Trial Now
            </button>
          </div>
        </div>
      </footer>

      <div className="bg-chineseBlack">
        <div className="container mx-auto px-4 lg:px-14 py-5 pb-2 lg:pb-5">
          <div className="flex justify-center flex-col md:flex-row gap-5 lg:gap-0 md:justify-between items-center">
            <div className="flex gap-4">
              {socialMediaIcons?.map((item, index) => (
                <a href={item?.link} target="_blank">
                  <Image
                    src={item?.icon}
                    alt="Social Icons"
                    className="w-8 h-8 "
                  />
                </a>
              ))}
            </div>
            <a
              href="https://www.niftytrader.in"
              target="_blank"
              className="text-white font-bold underline"
            >
              www.niftytrader.in
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
