import { Swiper, SwiperSlide } from "swiper/react";
// import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import rightArrowImage from "/src/assets/right-arrow.svg";
import fivestarsImage from "/src/assets/5stars.png";

function Testimonial() {
  const testimonials = [
    {
      name: "Emily Johnson",
      review:
        "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
    },
    {
      name: "John Smith",
      review:
        "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.",
    },
    {
      name: "Samantha Davis",
      review:
        "I was blown away by Damien's ability to capture the essence of our wedding day. Hes photographs are our cherished memories.",
    },
  ];

  // const prevButtonRef = useRef(null);
  // const nextButtonRef = useRef(null);

  return (
    <div className=" pt-4 my-16 w-[90%] m-auto text-headerGrey">
      <div className="border-b-2 border-lightDark pb-2">
        <p className="text-grey text-sm font-semilight ">Testimonial</p>
        <p className="text-headerGrey text-2xl font-semibold w-80">
          WHAT MY CLIENTS SAY
        </p>

        <div className="flex flex-col-reverse ">
          <div className="pt-4">
            <p className="text-[0.7rem] text-primaryGrey font-thin">
              Total Reviews
            </p>
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
                View All Testimonials{" "}
                <img src={rightArrowImage} alt="right arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Swiper
          slidesPerView={1}
          // navigation={{ prevEl: prevButtonRef.current , nextEl: nextButtonRef, }}
          navigation={{ prevEl: ".prev", nextEl: ".next" }}
          modules={[Navigation]}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="text-headerGrey   w-full mySwiper"
            >
              <div className="testimonialCard flex justify-between items-start my-6 border-2 p-4 rounded-md border-lightDark w-full">
                <div>
                  <p className="text-sm font-light"> {testimonial.name}</p>
                  <p className="text-sm font-thin">USA, California</p>
                  <img
                    src={fivestarsImage}
                    alt="yellow 5 stars review"
                    className="max-w-full my-4"
                  />
                  <p className="text-sm font-normal w-60">
                    {testimonial.review}
                  </p>
                </div>
                <div className=" p-2 flex gap-2 items-center border-roundedGrey border-2  justify-center rounded-full">
                  <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
                    <svg
                      className="max-w-full"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#a)">
                        <path
                          d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8 8 0 0 0 16 8"
                          fill="#fff"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h16v16H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
                    <svg
                      className="max-w-full"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#a)">
                        <path
                          d="M5.033 14.5c6.037 0 9.34-5.002 9.34-9.339q0-.212-.01-.425A6.7 6.7 0 0 0 16 3.036a6.5 6.5 0 0 1-1.884.516 3.3 3.3 0 0 0 1.443-1.815 6.6 6.6 0 0 1-2.083.797A3.287 3.287 0 0 0 7.88 5.527 9.32 9.32 0 0 1 1.115 2.1a3.286 3.286 0 0 0 1.016 4.38 3.3 3.3 0 0 1-1.487-.41v.041A3.28 3.28 0 0 0 3.278 9.33c-.483.132-.99.151-1.481.056a3.29 3.29 0 0 0 3.065 2.282A6.58 6.58 0 0 1 0 13.026 9.3 9.3 0 0 0 5.033 14.5"
                          fill="#fff"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h16v16H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
                    <svg
                      className="max-w-full"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#a)">
                        <path
                          d="M14.816 0H1.18C.528 0 0 .516 0 1.153v13.69A1.17 1.17 0 0 0 1.181 16h13.635c.653 0 1.184-.519 1.184-1.153V1.153C16 .516 15.469 0 14.816 0M4.746 13.634H2.373V5.997h2.375zM3.56 4.956a1.376 1.376 0 1 1-.004-2.751 1.376 1.376 0 0 1 .004 2.751m10.075 8.678h-2.372V9.922c0-.885-.015-2.025-1.234-2.025-1.234 0-1.422.966-1.422 1.962v3.775H6.238V5.997h2.274V7.04h.032c.315-.6 1.09-1.235 2.243-1.235 2.404 0 2.847 1.582 2.847 3.638z"
                          fill="#fff"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h16v16H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="p-2 my-6 flex gap-4 items-center border-roundedGrey border-2 w-[40%] justify-center rounded-full m-auto">
          <button
            className="prev border-2 w-[60px] h-[60px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark"
            // ref={prevButtonRef}
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
            className="next border-2 w-[60px] h-[60px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark"
            // ref={nextButtonRef}
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
  );
}

export default Testimonial;
