import glitter from "/src/assets/glitter.png";
import arrowTopRight from "/src/assets/arrow-top-right.png";

function Footer() {
  return (
    <div className="pt-20 text-headerGrey">

      <p className="text-lightDark text-7xl text-right font-bold p-2">DAMIEN</p>
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

      <div>
        <div>
          <p className="text-[0.8rem] text-grey font-bold ">
            A MORE MEANINGFUL HOME FOR PHOTOGRAPHY
          </p>
          <div className="pt-6">
            <p className="flex gap-4 items-center font-semibold text-2xl ">
              LET&apos;S{" "}
              <span className=" bg-royalBlue py-2 px-6 rounded-full">
                <img src={arrowTopRight} alt="arrow facing 120 degree" />
              </span>{" "}
            </p>
            <p className="font-semibold text-2xl ">WORK TOGETHER</p>
          </div>
        </div>

        <div>

            <div className="flex flex-wrap justify-between ">

               <div>
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

    </div>
  );
}

export default Footer;
