import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

const ClientTestimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    pauseOnHover: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    ltr: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    pauseOnHover: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:container mx-auto  lg:px-14 py-4 lg:py-14">
      <h2 className="text-darkSlateGray font-bold my-5 text-center  text-2xl lg:text-4xl">
        Client Testimonials
      </h2>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="slider-container ">
        <Slider {...settings2}>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-md rounded-3xl p-5 grid lg:flex items-center gap-5 my-5  ">
              <img
                className="rounded-full min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover object-top mx-auto lg:m-0 -mt-20 lg:mt-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzfHxjbGllbnQlMjBwcm9maWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzIwNzYwMTI4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Client Profile Image"
              />
              <div>
                <h4 className="text-darkSlateGray font-semibold text-xl my-2">
                  Bhavyaa Narotambhai
                </h4>
                <p className="text-darkSlateGray text-sm">
                  Superb app! You guys are great. Everything's at my fingertips
                  now: option analysis, EMA, pivot points, company profiles,
                  gaps up/down, FII & DII data, ban lists... What's not here?!
                  You keep nothing hidden. Thank you very much, guys! Thanks a
                  lot!
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ClientTestimonials;
