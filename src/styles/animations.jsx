import { useGSAP } from "@gsap/react";
import { gsap} from "gsap";
import PropTypes from "prop-types";


gsap.registerPlugin(useGSAP);

const HeroAnimation = ({ prop }) => {
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.from(".fade", { opacity: 0, delay: 1, duration:1, ease: "power2.inOut" }).from(
        ".fade2",
        { y: 100, opacity: 0, ease: "power2.inOut" }
      );
    },
    { scope: prop }
  );
}
  

HeroAnimation.prototype = {
  prop: PropTypes.string.isRequired,
};

export default HeroAnimation;
