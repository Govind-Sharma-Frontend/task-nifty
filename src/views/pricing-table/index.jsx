import Image from "next/image";

import ApproveIcon from "@/@core/assets/approveIcon.png";
import RejectIcon from "@/@core/assets/rejectIcon.png";
import { pricingData } from "@/db";

const PricingTable = () => {
  return (
    <div className="container mx-auto lg:px-14 lg:py-14 overflow-auto">
      <table className="w-full ">
        <thead>
          <tr>
            <th>
              <div className="flex gap-5 items-center ">
                <h3 className="text-darkSlateGray text-left lg:text-center text-sm lg:text-xl font-bold">
                  Compare Plans
                </h3>

                <div className="border border-darkGray hidden md:visible rounded-full px-5 py-1 min-w-[106px]">
                  <span> 60 % off</span>
                </div>
              </div>
              <p className="text-darkGray text-xs text-left lg:text-center lg:text-sm my-2 lg:my-4 ">
                Choose your workspace plan according to your organisational plan
              </p>
            </th>
            <th className="text-center">
              <p className=" text-lg lg:text-3xl text-darkSlateGray font-bold">
                Free
                <span className="block lg:inline text-xs lg:text-sm text-darkGray font-normal">
                  / Lifetime
                </span>
              </p>
              <button className="mt-6 w-16 md:w-28 lg:w-72 px-2 lg:px-12 py-2 text-center text-white bg-royalBlue border border-royalBlue rounded font-semibold text-[10px] lg:text-[16px]  hover:bg-transparent hover:text-royalBlue transition-colors duration-300">
                Create Free Account
              </button>
            </th>

            <th className="text-center">
              <p className="text-lg lg:text-3xl text-darkSlateGray font-bold">
                ₹ 849
                <span className="block lg:inline text-xs lg:text-sm text-darkGray font-normal">
                  / Month
                </span>
              </p>
              <button className="mt-6 w-16 md:w-28 lg:w-72 px-2 lg:px-12 py-2 text-center text-white bg-royalBlue border border-royalBlue rounded font-semibold text-[10px] lg:text-[16px]  hover:bg-transparent hover:text-royalBlue transition-colors duration-300">
                Login to Buy
              </button>
            </th>
            <th className="text-center">
              <p className="text-lg lg:text-3xl text-darkSlateGray font-bold">
                ₹ 4310
                <span className="block lg:inline text-xs lg:text-sm text-darkGray font-normal">
                  / Year
                </span>
              </p>
              <button className="mt-6 w-16 md:w-28 lg:w-72 px-2 lg:px-12 py-2 text-center text-white bg-royalBlue border border-royalBlue rounded font-semibold text-[10px] lg:text-[16px]  hover:bg-transparent hover:text-royalBlue transition-colors duration-300">
                Login to Buy
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {pricingData?.map((item, index) => (
            <tr key={index}>
              <td className="text-darkSlateGray text-[12px] lg:text-[16px] font-semibold">
                {item.title}
              </td>
              <td className="text-center text-darkSlateGray text-xs lg:text-sm">
                {item?.td1 == "approve" || item?.td1 == "reject"
                  ? ""
                  : item.td1}
                {item?.td1 == "approve" ? (
                  <Image
                    src={ApproveIcon}
                    alt="Approve Icon"
                    className="w-5 m-auto"
                  />
                ) : (
                  item?.td1 == "reject" && (
                    <Image
                      src={RejectIcon}
                      alt="Reject Icon"
                      className="w-5 m-auto"
                    />
                  )
                )}
              </td>
              <td className="text-center text-darkSlateGray text-xs lg:text-sm">
                {item?.td2 == "approve" || item?.td2 == "reject"
                  ? ""
                  : item.td2}
                {item?.td2 == "approve" ? (
                  <Image
                    src={ApproveIcon}
                    alt="Approve Icon"
                    className="w-5 m-auto"
                  />
                ) : (
                  item?.td2 == "reject" && (
                    <Image
                      src={RejectIcon}
                      alt="Reject Icon"
                      className="w-5 m-auto"
                    />
                  )
                )}
              </td>
              <td className="text-center text-darkSlateGray text-xs lg:text-sm">
                {item?.td3 == "approve" || item?.td3 == "reject"
                  ? ""
                  : item.td3}
                {item?.td3 == "approve" ? (
                  <Image
                    src={ApproveIcon}
                    alt="Approve Icon"
                    className="w-5 m-auto"
                  />
                ) : (
                  item?.td3 == "reject" && (
                    <Image
                      src={RejectIcon}
                      alt="Reject Icon"
                      className="w-5 m-auto"
                    />
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
