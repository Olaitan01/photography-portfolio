
import Marquee from "react-fast-marquee";
import arrowTopRight from "/src/assets/arrow-top-right.png";
import glitter from "/src/assets/glitter.png";
import heroImage from "/src/assets/about/Images Container.png";
import mobileHero from "/src/assets/about/mobile-hero.png";


function Hero() {


  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   function handleResize() {
  //     setIsMobile(window.innerWidth < 768);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div  className="  overflow-x-hidden hero lg:pb-20">
      <div className=" fade text-headerGrey  py-10 w-[90%] m-auto lg:flex lg:justify-between lg:items-center lg:pb-24">
        <div >
          <p className=" text-lg font-semilight text-grey">
            STUNNING PHOTOGRAPHY BY
          </p>
          <h1 className="text-4xl font-semibold lg:text-[4rem] lg:pt-8">
            DAMIEN BRAUN
          </h1>
        </div>
        <div className="pt-6 lg:pt-0 ">
          <p className="flex gap-4 items-center font-semibold text-2xl lg:text-4xl ">
            LET&apos;S{" "}
            <span className=" bg-royalBlue py-4 px-8 rounded-full">
              <img src={arrowTopRight} alt="arrow facing 120 degree" />
            </span>{" "}
          </p>
          <p className="font-semibold text-2xl lg:text-4xl">WORK TOGETHER</p>
        </div>
      </div>
      <Marquee autoFill className="-z-10 lg:z-10 fade servicesAnimation text-xLightPurple text-sm font-light flex items-center justify-between overflow-x-hidden  w-full   border-t-[0.5px] border-b-[0.5px] border-t-lightDark border-b-lightDark py-2 bg-serviceBg">
        <span className="inline-block ">EVENT PHOTOGRAPHY</span>
        <span className="block ">
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
      </Marquee>

      <div className="fade m-auto px-2 lg:px-20">
        
          <img
            src={mobileHero}
            alt="grid creative photographed images "
            className="object-cover max-w-full w-full sm:hidden block"
          />
        
          <img
            src={heroImage}
            alt="grid creative photographed images "
            className="object-cover max-w-full w-full sm:block hidden"
          />
      
      </div>
      
    </div>
  );
}

export default Hero;
