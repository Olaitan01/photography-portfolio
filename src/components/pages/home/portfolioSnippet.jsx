import rightArrow from "/src/assets/right-arrow.svg";
import arrowTopRight from "/src/assets/arrow-top-right.png";
import image1 from "/src/assets/about/Image (8).png";
import image2 from "/src/assets/about/Image (9).png";
import image3 from "/src/assets/about/Image (10).png";


function PortfolioSnippet(){
    const works = [{
        index:1,
        photo: image1,
       title: "Faces of Resilience",
        year: "March 2022",
        alt: "A photograph of a black african woman with her back facing the camera"
    },
{
    index:2,
    photo: image2,
        title: "A Wedding Tale",
        year: "January 2020" ,
        alt:" An asian woman sitting graciously endowed in adornmnet "
},
{
    index:3,
   photo: image3,
   title: "Product Elegance",
    year: "March 2020",
    alt: "A brown box of the BURBERRY brand"
}]



    return(
        <div className=" pt-4 w-[90%] m-auto text-headerGrey">
            <div className="border-b-2 border-lightDark">
        <div>
          <p className="text-grey text-sm font-semilight ">PORTFOLIO</p>
          <p className="text-headerGrey text-2xl font-semibold w-80">
            EXPLORE MY PHOTOGRAPHY WORK.
          </p>
        </div>
        <div>
          <button className="text-headerGrey text-sm inline-flex gap-2 bg-lightDark rounded-md p-4 my-6 ">
            View All Works <img src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>

        <div>
           {works.map((work) =>
            <div key={work.index} className="py-6">
                 <img src={work.photo} alt={work.alt}  className="object-cover max-w-full w-full"/>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-lg">{work.title}</p>
                    <p className="text-gray text-sm font-thin">{work.year}</p>
                </div>
                <div>
                    <button className="inline-flex items-center text-lg gap-2 border-b-2 border-lightDark">VIEW PROJECT <span><img src={arrowTopRight} alt="arrow top right" /></span></button>
                </div>
            </div>
            </div>
           )}
        </div>
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
    )
}

export default PortfolioSnippet