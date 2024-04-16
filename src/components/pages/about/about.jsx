import { useEffect, useState } from "react";
import HeroImg from "/src/assets/about/Image (17).png" ;
import mobileHeroImg from "/src/assets/about/Image (18).png";

function About(){
    const [isMobile, setIsMobile] = useState();

    useEffect(()=>{
        function handleResize(){
            setIsMobile(window.innerWidth < 746)
        }
        
        window.addEventListener('resize',handleResize)

        return()=>window.removeEventListener('resize',handleResize)


    },[])


    return(
        < >
        <div className="w-[90%] flex justify-center m-auto items-center">
           <div>
           <div>
                {!isMobile ?  <img src={HeroImg} alt="Damien standing upright with his arms folded" className="w-full" /> :  <img src={mobileHeroImg} alt="Damien standing upright with his arms folded" className="w-[500px]" />}
               
            </div>
            <div>

            </div>
           </div>
        </div>
        </>
    )
}

export default About