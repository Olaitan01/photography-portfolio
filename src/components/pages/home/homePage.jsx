
import Hero from '/src/components/header/hero'
import Introduction from './introduction';
import ServicesSnippet from './services-Snippet';
import PortfolioSnippet from './portfolioSnippet';
import Faqs from './faqs';
import Testimonial from './testimonial';
import Footer from '/src/components/footer/footer';

function Home(){
    return(
        <>
    <Hero/>
    <Introduction/>
    <ServicesSnippet/>
    <PortfolioSnippet/>
    <Faqs/>
    <Testimonial/>
    <Footer/>
     </>
    )
}

export default Home;