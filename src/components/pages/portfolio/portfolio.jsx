import Marquee from "react-fast-marquee";
import desktopHeroImg from "/src/assets/about/Image (19).png";
import mobileHeroImg from "/src/assets/about/Image (20).png";
import ResponsiveHeroImg from "../../responsiveHero";
import PortfolioProjects from "./portfolioProjects";
import Faqs from "../home/faqs";
import Testimonial from "../home/testimonial";
import Footer from "/src/components/footer/footer";
import heroStar from "/src/assets/Abstract Design (3).png";
import infinityParker from "/src/assets/Logo (1).png";
import omegaMillion from "/src/assets/Logo (2).png";
import wheelApp from "/src/assets/Logo (3).png";
import highCountryClub from "/src/assets/Logo (4).png";
import edgeKart from "/src/assets/Logo (5).png";
import image1 from "/src/assets/about/Image (8).png";
import image2 from "/src/assets/about/Image (9).png";
import image3 from "/src/assets/about/Image (10).png";
import image21 from "/src/assets/about/Image (21).png";
import image22 from "/src/assets/about/Image (22).png";
import image23 from "/src/assets/about/Image (23).png";
import image24 from "/src/assets/about/Image (24).png";
import image25 from "/src/assets/about/Image (25).png";
import image26 from "/src/assets/about/Image (26).png";
import image27 from "/src/assets/about/Image (27).png";
import image28 from "/src/assets/about/Image (28).png";

function Portfolio() {
  return (
    <>
      <ResponsiveHeroImg
        desktopImg={desktopHeroImg}
        mobileImg={mobileHeroImg}
        herostar={heroStar}
        header="Portfolio"
        title="Visual Poetry in Pixels"
        paragraph="Step into a visual journey that encapsulates the essence of my lens. Each photograph in this portfolio is a narrative, a frozen moment in time, and a testament to the artistry and passion poured into every frame. Explore the diverse tapestry of stories I've had the privilege to capture and witness the world through my lens."
      />
      <div className=" text-textGrey py-6">
        <p className="text-sm font-normal text-textGrey text-center">
          BRANDS I HAVE WORKED WITH
        </p>

        <Marquee
          autoFill
          className="bg-lightDark p-4 flex items-center justify-center gap-4 w-full my-4"
        >
          <div>
            <img
              src={infinityParker}
              alt="infinity parker logo icon"
              className="w-full max-w-full"
            />
          </div>
          <div>
            <img
              src={omegaMillion}
              alt="omega million logo icon"
              className="w-full max-w-full"
            />
          </div>
          <div>
            <img
              src={wheelApp}
              alt="wheel app logo icon"
              className="w-full max-w-full"
            />
          </div>
          <div>
            <img
              src={highCountryClub}
              alt="high country club logo icon"
              className="w-full max-w-full"
            />
          </div>
          <div>
            <img
              src={edgeKart}
              alt="edge cart logo icon"
              className="w-full max-w-full"
            />
          </div>
        </Marquee>
      </div>

      <PortfolioProjects
        serviceTitle="COMMERCIAL PHOTOGRAPHY"
        nextBtn="nextBtn"
        prevBtn="prevBtn"
        obj={[
          {
            photo: image1,
            title: "Faces of Resilience",
            year: "March 2022",
            alt: "A photograph of a black african woman with her back facing the camera",
          },
          {
            photo: image2,
            title: "A Wedding Tale",
            year: "January 2020",
            alt: " An asian woman sitting graciously endowed in adornmnet ",
          },
          {
            photo: image3,
            title: "Product Elegance",
            year: "March 2020",
            alt: "A brown box of the BURBERRY brand",
          },
          {
            photo: image21,
            title: "Face of Resilience",
            year: "March 2022",
            alt: "A photograph of a black african woman with her back facing the camera",
          },
          {
            photo: image22,
            title: "Innocence unveiled",
            year: "January 2020",
            alt: "A young white girl in a colorful clothes sitting on a bench",
          },
        ]}
      />

      <PortfolioProjects
        serviceTitle="EVENTS PHOTOGRAPHY"
        nextBtn="eventsNextBtn"
        prevBtn="eventsPrevBtn"
        obj={[
          {
            photo: image23,
            title: " A Wedding Tale",
            year: "September 2021",
            alt: "A bridal photoshoot of a bride with her back faced againts the lens of the camera whhile starign out the window",
          },
          {
            photo: image24,
            title: "Corporate Excellent Summit",
            year: "November 2019",
            alt: "A book opened in the middle with pen lying straight in the middle at a conference ",
          },
          {
            photo: image25,
            title: "Festival of Colors",
            year: "March 2018",
            alt: "A Happy Lady smiling with her teeths out look up to the sky in sun shades while color dusts rains down on her",
          },
          {
            photo: image21,
            title: "Face of Resilience",
            year: "March 2022",
            alt: "A photograph of a black african woman with her back facing the camera",
          },
          {
            photo: image22,
            title: "Innocence unveiled",
            year: "January 2020",
            alt: "A young white girl in a colorful clothes sitting on a bench",
          },
        ]}
      />

      <PortfolioProjects
        serviceTitle="COMMERCIAL PHOTOGRAPHY"
        nextBtn="commercialNextBtn"
        prevBtn="commercialPrevBtn"
        obj={[
          {
            photo: image26,
            title: "Product Elegance",
            year: "August 202",
            alt: "A photography of a black leather bag placed upright on a heap of rock",
          },
          {
            photo: image27,
            title: "Brand Story Telling",
            year: "May 2019",
            alt: "A book opened in the middle with pen lying straight in the middle at a conference ",
          },
          {
            photo: image28,
            title: "Curlinary Delights",
            year: "February 2017",
            alt: "A photography of a chef's hand in a kitchen slicing vegetables with other vegetables on a chop board",
          },
          {
            photo: image21,
            title: "Face of Resilience",
            year: "March 2022",
            alt: "A photograph of a black african woman with her back facing the camera",
          },
          {
            photo: image22,
            title: "Innocence unveiled",
            year: "January 2020",
            alt: "A young white girl in a colorful clothes sitting on a bench",
          },
        ]}
      />

      <Faqs />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Portfolio;
