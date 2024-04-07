import arrowTopRight from "/src/assets/arrow-top-right.png";
import glitter from "/src/assets/glitter.png";
import heroImage from "/src/assets/about/Images Container.png"
// import image1 from "/src/assets/about/Image.png";
// import image2 from "/src/assets/about/Image (1).png";
// import image3 from "/src/assets/about/Image (2).png";
// import image4 from "/src/assets/about/mobile/Image (15).png";
// import image5 from "/src/assets/about/mobile/Image (13).png";
// import image6 from "/src/assets/about/mobile/Image (14).png";

function Hero() {
  return (
    <div className="overflow-x-hidden">
      <div className=" text-headerGrey px-4 py-10 ">
        <div>
          <p className=" text-lg font-semilight text-grey">
            STUNNING PHOTOGRAPHY BY
          </p>
          <h1 className="text-4xl font-bold">DAMIEN BRAUN</h1>
        </div>
        <div className="pt-6">
          <p className="flex gap-4 items-center font-semibold text-2xl ">
            LET&apos;S{" "}
            <span className=" bg-royalBlue py-4 px-8 rounded-full">
              <img src={arrowTopRight} alt="arrow facing 120 degree" />
            </span>{" "}
          </p>
          <p className="font-semibold text-2xl ">WORK TOGETHER</p>
        </div>
      </div>
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

      <div className="m-auto px-2" >
        <img src={heroImage} alt="grid creative photographed images" className="object-cover max-w-full w-full" />

        {/* <div className="flex flex-wrap relative h-[50vw] px-2 w-full gap-2">
          <img
            src={image1}
            alt="hero model image"
            className="object-cover w-[50%] h-40 "
          />
          <img src={image4} alt="hero model image" className="object-cover  " />
          <img
            src={image5}
            alt="hero model image"
            className="object-cover h-[50%] w-[15.5%]"
          />
          <img
            src={image2}
            alt="hero model image"
            className="object-cover w-16  h-16 -translate-y-16"
          />
          <img
            src={image3}
            alt="hero model image"
            className="object-cover  w-[45%] h-40 -translate-y-[10rem] "
          />
          <img src={image6} alt="hero model image" className="object-cover h-20 w-[14%] absolute right-4 top-[54%]" />
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
