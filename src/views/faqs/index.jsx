import { Accordion } from "flowbite-react";

const FAQs = ({ data }) => {
  return (
    <div className="container mx-auto my-12 px-4 lg:px-14">
      <h2 className="text-darkSlateGray font-bold my-5 text-center text-2xl lg:text-4xl">
        FAQ
      </h2>

      <div className="max-w-[1200px] m-auto min-w-[300px]">
        {data?.map(({ title, description }) => (
          <>
            <Accordion
              collapseAll
              className="border-t-0 border-l-0 border-r-0 my-5"
            >
              <Accordion.Panel>
                <Accordion.Title className="text-darkSlateGray text-sm lg:text-xl py-2 lg:py-4">
                  {title}
                </Accordion.Title>
                <Accordion.Content className="transition-all duration-500 text-darkGray py-1 lg:py-2 ">
                  <p className="lg:mb-2 text-gray-500 dark:text-gray-400 text-xs lg:text-[16px]">
                    {description}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
