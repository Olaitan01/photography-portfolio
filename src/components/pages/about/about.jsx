import AboutHero from "./aboutHero";
import Biography from "./biography";
import Timeline from "./timeline";
import Testimonial from "../home/testimonial"
import Footer from "/src/components/footer/footer"

function About(){
    return(
        <div >
        <AboutHero/>
        <Biography/>
        <Timeline/>
        <Testimonial/>
        <Footer/>
        </div>
    )
}

export default About