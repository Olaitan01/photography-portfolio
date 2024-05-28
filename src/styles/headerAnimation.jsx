import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PropTypes from "prop-types";

gsap.registerPlugin(useGSAP);

const HeaderAnimation = ({ prop }) => {
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(prop.current, {
        y: -100,
        opacity: 0,
        delay: 0.5,
        ease: "power2.inOut",
      });
    },
    { scope: prop }
  );
};

HeaderAnimation.prototype = {
  prop: PropTypes.string.isRequired,
};
export default HeaderAnimation;
