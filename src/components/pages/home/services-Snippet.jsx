import rightArrow from "/src/assets/right-arrow.svg";
import arrowTopRight from "/src/assets/arrow-top-right.png";
import darkGlitter from "/src/assets/dark-glitter.png";

function ServicesSnippet() {
  const serviceHighlights = [
    "Coverage for weddings, parties, corporate functions, and more.",
    "Skilled photographers who know how to seize the moment.",
    "A mix of candid and posed shots for a comprehensive story.",
    "Quick turnaround for you to relive the day's highlights.",
  ];

  return (
    <div className=" pt-10 w-[90%] m-auto text-headerGrey">
      <div className="border-b-2 border-lightDark">
        <div>
          <p className="text-grey text-sm font-semilight ">SERVICES</p>
          <p className="text-headerGrey text-2xl font-semibold">
            MY PHOTOGRAPHY SERVICES
          </p>
        </div>
        <div>
          <button className="text-headerGrey text-sm inline-flex gap-2 bg-lightDark rounded-md p-4 my-6 ">
            View All Services <img src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>

      <div className="py-6">
        <div className="text-grey">
          <h2 className=" font-bold  flex items-center gap-2">
            EVENTS{" "}
            <span className=" bg-royalBlue py-2 px-4 rounded-full">
              <img
                src={arrowTopRight}
                alt="arrow facing 120 degree"
                className="w-4"
              />
            </span>{" "}
          </h2>
          <p className="text-sm font-medium py-4 leading-6">
            Our event photography service is dedicated to capturing the magic of
            your special occasions. Whether it&apos;s a wedding, corporate
            event, or milestone celebration, we&apos;re there to document every
            heartfelt moment. We blend into the background, ensuring natural and
            candid shots that reflect the emotions of the day.
          </p>

          <div className="text-primaryGrey py-4">
            <h3 className="text-lg font-medium">Services Highlights</h3>
            {serviceHighlights.map((highLight, index) => (
              <p
                key={index}
                className="inline-flex items-center gap-4 my-2 text-2xl font-thin border-2 border-lightDark rounded-md p-4"
              >
                <img src={darkGlitter} alt="dark glitter" className="w-8 h-8" />{" "}
                {highLight}
              </p>
            ))}
            <div className="p-2 my-6 flex gap-4 items-center border-roundedGrey border-2 w-[40%] justify-center rounded-full m-auto">
              <button className=" border-2 w-[60px] h-[60px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
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
              <button className=" border-2 w-[60px] h-[60px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
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
        <div></div>
      </div>
    </div>
  );
}

export default ServicesSnippet;
