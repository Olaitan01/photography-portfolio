import arrow from "/src/assets/arrow-top-right.png";
import darkGlitter from "/src/assets/dark-glitter.png";



const Servicescomponent = (prop) => {
  // const serviceSession = [
  //   {
  //     sessionTitle: "Individual Session",
  //     amount: "$250",
  //     details: [
  //       "IDEAL FOR CAPTURING YOUR UNIQUE PERSONA;ITY AND STYLE",
  //       "Includes a 2-hour photoshoot and 20 professionally edited images.",
  //       "Additional images can be purchased at $10 each.",
  //     ],
  //   },
  //   {
  //     sessionTitle: "Family Session",
  //     amount: "$400",
  //     details: [
  //       "IDEAL FOR CAPTURING YOUR UNIQUE PERSONA;ITY AND STYLE",
  //       "Includes a 2-hour photoshoot and 20 professionally edited images.",
  //       "Additional images can be purchased at $10 each.",
  //     ],
  //   },
  //   {
  //     sessionTitle: "Individual Session",
  //     amount: "$250",
  //     details: [
  //       "IDEAL FOR CAPTURING YOUR UNIQUE PERSONA;ITY AND STYLE",
  //       "Includes a 2-hour photoshoot and 20 professionally edited images.",
  //       "Additional images can be purchased at $10 each.",
  //     ],
  //   },
  // ];

  return (
    <div className="w-[90%] m-auto text-textGrey ">
      <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-lightDark pt-16 pb-20">
        <div>
          <p className="font-semibold ">{prop.serviceType}</p>
          <p className="text-sm font-normal sm:w-[80%] sm:py-8">
         {prop.serviceDetails}
          </p>
          <button className="flex items-center gap-2 text-headerGrey text-sm cursor-pointer">
            VIEW PROJECTS{" "}
            <img src={arrow} alt="top right arrow icon" className="w-5" />
          </button>
        </div>
        <div className="sm:w-[150em]">
          <img
            src={prop.img}
            alt="A portrait image of a blonde lady"
            className="w-full max-w-full object-cover"
          />
          <div className=" p-1 flex gap-2 items-center border-roundedGrey border-2 w-[16%] justify-center rounded-full m-auto -translate-y-8">
            <button
              className={`${prop.prevBtn} border-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark`}
            >
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
            <button
              className={`${prop.nextBtn} border-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark`}
            >
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

      <div className="">
        <div className="  justify-between items-center ">
          {prop.serviceSession.map((service, index) => (
            <div key={index} >
              <div className="flex flex-col sm:flex-row justify-between items-center py-8 text-headerGrey border-t-2 border-lightDark">

                <div>
                  <p className="text-[0.8rem] font-normal">
                    {service.sessionTitle}
                  </p>

                  <div className="flex items-center gap-4 justify-between sm:justify-normal">
                    <p className="text-4xl font-normal">{service.amount}</p>
                    <button className=" flex  items-center gap-2 text-headerGrey text-[0.8rem] cursor-pointer border-b-2 border-lightDark pb-1">
                      BOOK A CALL{" "}
                      <img
                        src={arrow}
                        alt="top right arrow icon"
                        className="w-4"
                      />
                    </button>
                  </div>
                </div>

                <div className="sm:w-[70%]">
                  {service.details.map((detail, index) => (
                    <div key={index} className="sm:w-[100%]">
                      <div className="inline-flex items-center gap-4 my-2 text-xl text-headerGrey lg:text-sm font-thin border-2 border-lightDark rounded-md p-4 w-full">
                        <img
                          src={darkGlitter}
                          alt="dark glitter"
                          className="w-8 h-8"
                        />
                        {detail}{" "}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicescomponent;
