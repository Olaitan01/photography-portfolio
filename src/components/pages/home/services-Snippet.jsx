import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import rightArrow from "/src/assets/right-arrow.svg";
import arrowTopRight from "/src/assets/arrow-top-right.png";
import darkGlitter from "/src/assets/dark-glitter.png";
import serviceImage from "/src/assets/about/Image (7).png";

function ServicesSnippet() {
  const serviceHighlights = [
    {
      title: "EVENTS",
      description:
        "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
      highLights: [
        " Expressive and flattering portraits for individuals, families, and couples.",
        " Polished and engaging headshots for corporate profiles, resumes, and social media.",
        "Candid and natural images capturing everyday moments and personalities.",
        "Memorable portraits for engagements, graduations, and other life milestones.",
      ],
    },
    {
      title: "PORTRAIT ",
      description:
        "Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story.",
      highLights: [
        "Weddings, parties, corporate functions and more ",
        "Skilled at seizing the moment.",
        "Blend of candid and posed shots.",
        "Blend of candid and posed shots.",
        "Quick turnaround for reliving highlights",
      ],
    },
    {
      title: "COMMERCIAL",
      description:
        "In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience.",
      highLights: [
        "Showcase your products with stunning images for e-commerce and marketing.",
        " Professional portraits for executives, teams, and LinkedIn profiles.",
        "Capture the essence of corporate events, conferences, and product launches.",
        "Highlight architectural spaces with captivating images for real estate and hospitality.",
      ],
    },
  ];

  return (
    <div className=" pt-10 w-[90%] m-auto text-headerGrey">
      <div className="border-b-2 border-lightDark lg:flex lg:justify-between lg:items-center lg:pb-8 lg:pt-20">
        <div>
          <p className="text-grey text-sm font-semilight lg:font-semibold ">
            SERVICES
          </p>
          <p className="text-headerGrey text-2xl font-semibold lg:text-4xl">
            MY PHOTOGRAPHY SERVICES
          </p>
        </div>
        <div className="lg:flex lg:gap-4 lg:items-center">
          <div className="desktop-nav-btn hidden lg:flex  p-2 my-2 lg:my-0  gap-4  items-center border-roundedGrey border-2  lg:w-[45%] lg:p-1 justify-center rounded-full m-auto">
            <button className="prev border-2 w-[60px] lg:w-[50px] h-[60px] lg:h-[50px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 1L1.5 8L8.5 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="next border-2  w-[60px] lg:w-[50px] h-[60px] lg:h-[50px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1L8.5 8L1.5 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <button className="text-headerGrey text-sm inline-flex gap-2 bg-lightDark rounded-md p-4 lg:p-2 lg:py-4 lg:w-40 lg:justify-center my-6 lg:my-0">
            View All Services <img src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>

      <div className="py-6">
        <Swiper
          loop={true}
          modules={[Navigation]}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
        >
          {serviceHighlights.map((highLight, index) => (
            <SwiperSlide
              className="text-grey mySwiper lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:py-6 sm:py-4  "
              key={index}
            >
              <div className="py-8 lg:py-0">
                <img
                  src={serviceImage}
                  alt="an artist on a foggy stage at a concert"
                  className="object-cover max-w-full w-full lg:h-[70vh]"
                />
              </div>
              <div className="lg:w-[50%]">
                <h2 className=" font-bold  flex items-center gap-2 lg:text-xl">
                  {highLight.title}
                  <span className=" bg-royalBlue py-2 px-4 lg:px-6 rounded-full">
                    <img
                      src={arrowTopRight}
                      alt="arrow facing 120 degree"
                      className="w-4"
                    />
                  </span>
                </h2>
                <p className="text-sm font-medium py-4 leading-6">
                  {highLight.description}
                </p>

                <div className="text-primaryGrey py-4">
                  <h3 className="text-lg font-medium lg:text-sm">
                    Services Highlights
                  </h3>

                  {highLight.highLights.map((text, index) => (
                    <p
                      key={index}
                      className="inline-flex items-center gap-4 my-2 text-xl lg:text-sm font-thin border-2 border-lightDark rounded-md p-4 w-full"
                    >
                      {" "}
                      <img
                        src={darkGlitter}
                        alt="dark glitter"
                        className="w-8 h-8"
                      />{" "}
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="lg:hidden p-2 my-2 sm:mb-6 flex gap-4 items-center border-roundedGrey border-2 max-w-[50%] sm:max-w-[30%]  justify-center rounded-full m-auto ">
          <button className="prev border-2 w-[60px] h-[60px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 1L1.5 8L8.5 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="next border-2 w-[60px] h-[60px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1L8.5 8L1.5 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesSnippet;
