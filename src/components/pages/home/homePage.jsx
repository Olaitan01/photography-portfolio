
import Hero from "/src/components/header/hero";
import Introduction from "./introduction";
import ServicesSnippet from "./services-Snippet";
import PortfolioSnippet from "./portfolioSnippet";
import Faqs from "./faqs";
import Testimonial from "./testimonial";
import Footer from "/src/components/footer/footer";

function Home() {
  

  return (
    <div >
      <div>
        <Hero />
      </div>
      <div  >
        <Introduction />
        <ServicesSnippet />
        <PortfolioSnippet />
        <Faqs />
        <Testimonial />
        <Footer />
      </div>

    
    </div>
  );
}

export default Home;
