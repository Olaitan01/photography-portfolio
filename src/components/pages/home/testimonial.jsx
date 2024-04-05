import rightArrow from "/src/assets/right-arrow.svg";

function Testimonial(){
    return(
        <div className=" pt-4 my-16 w-[90%] m-auto text-headerGrey">
            <div  className="border-b-2 border-lightDark pb-2">
                <p className="text-grey text-sm font-semilight ">Testimonial</p>
                <p className="text-headerGrey text-2xl font-semibold w-80">WHAT MY CLIENTS SAY</p>

                <div className="flex flex-col-reverse ">
                    <div className="pt-4">
                        <p className="text-[0.7rem] text-primaryGrey font-thin">Total Reviews</p>
                        <p className="text-[1rem] ">323</p>
                    </div>
                    <div>
                    <div className="hidden  p-2 my-6 lg:flex gap-4 items-center border-roundedGrey border-2 w-[40%] justify-center rounded-full m-auto">
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
                    <div>
                    <button className="text-headerGrey text-sm inline-flex gap-2 bg-lightDark rounded-md p-4 my-2">
            View All Testimonials <img src={rightArrow} alt="right arrow" />
          </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial