import ResponsiveHeroImg from "../../responsiveHero";
// import HeroText from "../../heroText";
import Testimonial from "../home/testimonial";
import Footer from "../../footer/footer";
import image34 from "/src/assets/about/Image (34).png";
import image35 from "/src/assets/about/Image (35).png";
import arrowTopRight from "/src/assets/arrow-top-right.png";

function Contact() {
  return (
    <>
      <ResponsiveHeroImg
        desktopImg={image34}
        mobileImg={image35}
        starProp="star"
        header="CONTACT ME"
        title="GET IN TOUCH WITH ME"
        paragraph="Step into a world of timeless photography with Damien Braun. Explore our range of photography services, each crafted to tell your unique story through captivating images. Whether it's the magic of portraits, the emotion of events, or the allure of commercial photography, we're here to bring your vision to life."
        serviceclass="contactText"
        socialClass="socials"
      />

      <div className="text-textGrey w-[90%] m-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 sm:border-t-2  border-lightDark sm:py-6 py-4">
          <div className=" sm:w-[30em]">
            <p className="sm:text-4xl text-2xl font-semibold sm:py-4 py-2">CONTACT INFORMATION</p>
            <p className="text-[.9rem] font-light sm:w-[90%] ">
              Feel free to reach out to us through various channels. We are
              available by phone, email, and social meida for your convenience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 pt-6 sm:pt-0">
            <p className="text-headerGrey text-[0.9rem] underline pb-2 sm:pb-0">+1-123-456-7890</p>
            <p className="text-headerGrey text-[0.9rem] underline">
              info@damienbraunphotograhpy.com
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-28  border-t-2 border-lightDark sm:py-6 py-4">
          <div className=" sm:w-[40em]">
            <p className="sm:text-4xl text-2xl font-semibold sm:py-4 py-2">SEND ME A MESSAGE</p>
            <p className="text-[.9rem] font-light sm:w-[90%] ">
              Have a specific inquiry or message for us? Please use the contact
              form below, and we&apos;ll get back to you promptly
            </p>
          </div>
          <div>
            <form
              action="/"
              method="get"
              className="sm:flex-row flex flex-col flex-wrap gap-6 justify-between sm:w-[100%] py-6 sm:py-0"
            >
              <div className="sm:w-[45%] flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-headerGrey text-sm font-thin py-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  className="placeholder-textGrey font-light  text-textGrey outline-0 border-b-2 border-lightDark bg-transparent "
                />
              </div>
              <div className="sm:w-[45%] flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-headerGrey text-sm font-thin py-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="LAST NAME"
                  className="placeholder-textGrey font-light  text-textGrey outline-0 border-b-2 border-lightDark bg-transparent "
                />
              </div>
              <div className="sm:w-[45%] flex flex-col">
                <label
                  htmlFor="email"
                  className="text-headerGrey text-sm font-thin py-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="placeholder-textGrey font-light  text-textGrey outline-0 border-b-2 border-lightDark bg-transparent "
                />
              </div>
              <div className="sm:w-[45%] flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className="text-headerGrey text-sm font-thin py-2"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="number"
                  id="phoneNumber"
                  placeholder=" PHONE NUMBER"
                  className=" placeholder-textGrey font-light  text-textGrey outline-0 border-b-2 border-lightDark bg-transparent "
                />
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="messsage"
                  className="text-headerGrey text-sm font-thin py-2"
                >
                  Your Message
                </label>
                <input
                  type="text"
                  placeholder="MESSAGE"
                  className="font-light placeholder-textGrey    text-textGrey outline-0 border-b-2 border-lightDark bg-transparent "
                />
              </div>
              <div>
                <button className="inline-flex items-center gap-2 text-3xl font-semibold text-headerGrey border-b-2 border-lightDark">
                  SEND MESSAGE{" "}
                  <span className=" bg-royalBlue py-2 px-4 lg:px-6 rounded-full">
                    <img
                      src={arrowTopRight}
                      alt="arrow facing 120 degree"
                      className="w-4"
                    />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Testimonial/>
      <Footer/>
    </>
  );
}

export default Contact;
