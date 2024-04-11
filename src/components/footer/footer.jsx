import glitter from "/src/assets/glitter.png";
import arrowTopRight from "/src/assets/arrow-top-right.png";

function Footer() {
  return (
    <div className="pt-20 text-headerGrey overflow-x-hidden">

      <p className="text-lightDark text-7xl text-right font-bold p-2 lg:text-[12rem] lg:font-semibold lg:pr-20 lg:pb-10">DAMIEN</p>
      <div className="servicesAnimation text-xLightPurple text-sm font-light flex items-center justify-between overflow-x-hidden  w-[250%] border-t-[0.5px] border-b-[0.5px] border-t-lightDark border-b-lightDark py-2 bg-serviceBg">
        <span className="inline-block">EVENT PHOTOGRAPHY</span>
        <span className="inline-block">
          <img src={glitter} alt="purple glitter icon" />
        </span>
        <span className="inline-block">COMMERCIAL PHOTOGRPAHY</span>
        <span className="inline-block">
          <img src={glitter} alt="purple glitter icon" />
        </span>
        <span className="inline-block">WEDDING PHOTOGRAPHY</span>
        <span className="inline-block">
          <img src={glitter} alt="purple glitter icon" />
        </span>
        <span className="inline-block">LANSCAPE PHOTOGRAPHY</span>
        <span className="inline-block">
          <img src={glitter} alt="purple glitter icon" />
        </span>
        <span className="inline-block">BRANDING PHOTOGRAPHY</span>
        <span className="inline-block">
          <img src={glitter} alt="purple glitter icon" />
        </span>
        <span className="inline-block">PORTRAIGHT PHOTOGRAPHY</span>
      </div>

    <div className="mx-6 lg:mx-20">
    <div className="border-r-2 border-l-2 border-lightDark  ">
     <div className="lg:flex lg:justify-between lg:items-center">
        <div className="px-4 lg:p-10 lg:h-60 border-b-2 lg:border-b-0 lg:border-r-2 border-lightDark pb-8">
          <p className="text-[0.8rem] text-grey font-bold pt-2 ">
            A MORE MEANINGFUL HOME FOR PHOTOGRAPHY
          </p>
          <div className="pt-10">
            <p className="flex gap-4 items-center font-semibold text-2xl lg:text-4xl ">
              LET&apos;S{" "}
              <span className=" bg-royalBlue py-2 px-6 rounded-full">
                <img src={arrowTopRight} alt="arrow facing 120 degree" />
              </span>{" "}
            </p>
            <p className="font-semibold text-2xl ">WORK TOGETHER</p>
          </div>
        </div>

        

            <div className="mt-6 lg:flex lg:justify-center">

              <div className="p-4 flex flex-wrap  justify-between lg:justify-center  lg:gap-[8rem]  ">
              <div >
                <p className="footerSerivce">HOME</p>
                <ul className="footerListContainer">
                    <li className="footerList ">ABOUT ME</li>
                    <li className="footerList ">MY WORKS</li>
                    <li className="footerList">TESTIMONIALS</li>
                </ul>
               </div>

               <div>
                <p className="footerSerivce">CLIENTS</p>
                <ul className="footerListContainer">
                    <li className="footerList">KLOVESSTO</li>
                    <li className="footerList">NUKEWAY</li>
                    <li className="footerList">CLOVEN&apos;S</li>
                    <li className="footerList">MENVOL</li>
                </ul>
               </div>

               <div>
                <p className="footerSerivce">PORTFOLIO</p>
                <ul className="footerListContainer">
                    <li className="footerList">EVENTS</li>
                    <li className="footerList">PORTRAIT</li>
                    <li className="footerList">BRANDING</li>
                    <li className="footerList">COMMERCIALE</li>
                    <li className="footerList">WEDDING</li>
                </ul>
               </div>

                <div>
                    <p className="footerSerivce">SERVICES</p>
                    <ul className="footerListContainer">
                    <li className="footerList">PORTRAITS</li>
                    <li className="footerList">EVENTS</li>
                    <li className="footerList">COMMERCIAL</li>
                </ul>
                </div>
              </div>
               

            </div>

        </div>
        <div className="text-sm py-8 font-normal text-grey text-center border-t-2 border-lightDark lg:flex lg:justify-between lg:items-center lg:">
                    <p className="">Terms & Condition | Privacy Policy</p>
                    <div className="p-2 hidden  lg:flex gap-2 items-center border-roundedGrey border-2 w-[40%] lg:w-[12%] justify-center rounded-full m-auto lg:m-0">
                <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
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
                <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
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
                <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
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
                    <p className="py-4">&copy; {new Date().getFullYear()} Damien Braun Photography. All rights reserved.</p>
                    <div className="lg:hidden p-2  flex gap-2 items-center border-roundedGrey border-2 w-[40%] lg:w-[12%] justify-center rounded-full m-auto lg:m-0">
                <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
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
                <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
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
                <span className=" border-2 w-[40px] h-[40px] inline-flex justify-center items-center rounded-full border-roundedGrey bg-lightDark">
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
                </div>
     </div>
    </div>

    </div>
  );
}

export default Footer;
