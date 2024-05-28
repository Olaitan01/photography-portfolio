// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import PropTypes from "prop-types";
// // import ScrollTrigger from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(useGSAP)

// const HomeAnimation = ({ prop }) => {
//   useGSAP(
//     () => {
      

//       gsap.from(".fade", {
//         opacity: 0,
//         delay: 1,
//         duration: 1,
//         stagger: 0.5,
//         ease: "power2.inOut",
//       });

//       // animate.from(".scale", {
//       //   scale: 0,
//       //   stagger: 1,
//       //   duration: 0.5,
//       //   ease: "power1.out",
//       // });

//       // const ctx = gsap.context(()=>{
//       //   ScrollTrigger.create(
//       //     {
//       //       trigger: ".trigger",
//       //       markers: true,
//       //       start: "top 50%",
//       //       end: "90% 50%",
//       //       scrub: 0.5,
//       //     }
//       //   )
//       // })
//       // return ()=>ctx.revert()
//     },
//     { scope: prop }
//   );
// };

// HomeAnimation.proptypes = {
//   prop: PropTypes.string.isRequired,
// };

// export default HomeAnimation;
