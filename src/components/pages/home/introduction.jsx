import rightArrow from "/src/assets/right-arrow.svg";
import damienImg from "/src/assets/about/Image (6).png";
import star from "/src/assets/star.png";
function Introduction() {
  return (
    <div className=" pt-10 w-[90%] m-auto">
      <div className="border-b-2 border-lightDark">
        <div>
          <p className="text-grey text-sm font-semilight ">ABOUT</p>
          <p className="text-headerGrey text-2xl font-semibold">I AM DAMIEN</p>
        </div>
        <div>
          <button className="text-headerGrey text-sm inline-flex gap-2 bg-lightDark rounded-md p-4 my-6 ">
            Know More <img src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>

      <div className="py-8 text-headerGrey">
        <div>
          <img
            src={damienImg}
            alt="damien standing in a field in a white tees wearing a dark shades, looking to the right with hands crossed "
            className="w-full"
          />
        </div>
        <div className="my-6  border-2 border-lightDark rounded-md text-primaryGrey">
          <div className="border-b-2 border-lightDark p-6">
            <h2 className="inline-flex items-center gap-4 text-xl ">
              <img src={star} alt="purple star" className="w-6" /> Introduction
            </h2>
            <p className="text-sm font-medium py-4 leading-6">
              My journey as a photographer has been a lifelong quest to capture
              the extraordinary in the ordinary, to freeze fleeting moments in
              time, and to share the world&apos;s beauty as I see it. Based in
              the enchanting landscapes of the USA, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and
              every frame is a piece of my heart.
            </p>
          </div>
          <div className="p-6">
            <h2 className="inline-flex items-center gap-4 text-xl ">
              <img src={star} alt="purple star" className="w-6" /> Contact
              Information
            </h2>

            <div className="text-md">

              <div className="py-4">
                <p className=" text-headerGrey">Email</p>
                <p className="text-primaryGrey py-2">damienbraun@gmail.com</p>
              </div>

              <div>
                <p className=" text-headerGrey">Phone Number</p>
                <p className="text-primaryGrey py-2">+00 000000000</p>
              </div>
              
              <div className="p-4 my-6 flex gap-2 items-center border-roundedGrey border-2 w-[40%] justify-center rounded-full">
                <span className=" border-2 w-[30px] h-[30px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
                  <svg
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
                <span className=" border-2 w-[30px] h-[30px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
                  <svg
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
                <span className=" border-2 w-[30px] h-[30px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
                  <svg
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
              <div className="text-md font-medium text-headerGrey text-center gap-4 flex flex-wrap lg:flex-nowrap" >
                <button className="inline-block border-2 border-roundedGrey w-full py-4 rounded-md bg-lightDark">Let&apos;s Work</button>
                <button className="inline-block border-2 border-roundedGrey w-full py-4 rounded-md bg-lightDark">Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
