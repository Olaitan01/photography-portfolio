import ResponsiveHeroImg from "../../responsiveHero";
import Servicescomponent from "./servicescomponent";
import Faqs from "../home/faqs";
import Footer from "/src/components/footer/footer";
import desktopHeroImg from "/src/assets/about/Image (29).png";
import mobileHeroImg from "/src/assets/about/Image (30).png";
import heroStar from "/src/assets/Abstract Design (3).png";
import image31 from "/src/assets/about/Image (31).png";
import image32 from "/src/assets/about/Image (32).png";
import image33 from "/src/assets/about/Image (33).png";

function Services() {
  return (
    <>
      <ResponsiveHeroImg
        desktopImg={desktopHeroImg}
        mobileImg={mobileHeroImg}
        herostar={heroStar}
        header="SERVICES"
        title="Diverse Photography Offerings"
        paragraph="  Unlock the full spectrum of professional photography services tailored to your vision. From timeless portraits to captivating event coverage, I bring a unique blend of creativity and technical expertise to each project."
        serviceclass="serviceText"
        serviceparagraph="serviceParagraph"
      />
      <Servicescomponent
        serviceType="PORTRAIT PHOTOGRAPHY"
        serviceDetails="Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story."
        img={image31}
        serviceSession={[
          {
            sessionTitle: "Individual Session",
            amount: "$250",
            details: [
              "IDEAL FOR CAPTURING YOUR UNIQUE PERSONA;ITY AND STYLE",
              "Includes a 2-hour photoshoot and 20 professionally edited images.",
              "Additional images can be purchased at $10 each.",
            ],
          },
          {
            sessionTitle: "Family Session",
            amount: "$400",
            details: [
              "IDEAL FOR CAPTURING YOUR UNIQUE PERSONA;ITY AND STYLE",
              "Includes a 2-hour photoshoot and 20 professionally edited images.",
              "Additional images can be purchased at $10 each.",
            ],
          },
          {
            sessionTitle: "Individual Session",
            amount: "$250",
            details: [
              "IDEAL FOR CAPTURING YOUR UNIQUE PERSONA;ITY AND STYLE",
              "Includes a 2-hour photoshoot and 20 professionally edited images.",
              "Additional images can be purchased at $10 each.",
            ],
          },
        ]}
      />
       <Servicescomponent
        serviceType="EVENTS PHOTOGRAPHY"
        serviceDetails="Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day."
        img={image32}
        serviceSession={[
          {
            sessionTitle: "Wedding Photography",
            amount: "$1,500",
            details: [
              "Capture the magic of your special day.",
              "Includes full-day coverage, a second photographer, and 300+ professionally edited images.",
              "Customizable packages are available to suit your specific wedding needs.",
            ],
          },
          {
            sessionTitle: "Party Coverage Session",
            amount: "$800",
            details: [
              "Preserve the fun and excitement of your event.",
              "Includes up to 4 hours of coverage and 150+ professionally edited images.",
              "Additional hours can be added at $150 per hour.",
            ],
          },
          {
            sessionTitle: "Corporate Events",
            amount: "Custom Pricing",
            details: [
              "Tailored solutions for corporate gatherings, conferences, and seminars.",
              "Contact us for a personalized quote based on your event's requirements.",

            ],
          },
        ]}
      />
 <Servicescomponent
        serviceType="COMMERCIAL PHOTOGRAPHY"
        serviceDetails="In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience."
        img={image33}
        serviceSession={[
          {
            sessionTitle: "Product Photography",
            amount: "$500",
            details: [
              "Showcase your products in the best light.",
              "Includes a half-day photoshoot, 20 professionally edited product images, and high-resolution files.",
              "Additional images can be purchased at $20 each.",
            ],
          },
          {
            sessionTitle: "Real Estate Photography",
            amount: "$700",
            details: [
              "HIGHLIGHT THE BEAUTY OF YOUR PROPERTIES.",
              "Includes interior and exterior shots, a 2-hour photoshoot, and 25 professionally edited images.",
              "Additional images can be purchased at $20 each.",
            ],
          },
          {
            sessionTitle: "Branding Photography",
            amount: "Custom Pricing",
            details: [
              "Craft a visual narrative that aligns with your brand identity.",
              "Contact us to discuss your brand photography needs and receive a personalized quote.",
            ],
          },
        ]}
      />
  <Faqs/>
  <Footer/>
    </>
  );
}

export default Services;
