import PropTypes from "prop-types";

const HeroText = (prop) => {
  return (
    <>
     <div className="w-[90%] m-auto py-10 text-textGrey border-b-2 border-lightDark">
     <p className="text-lg font-normal text-left" >{prop.title}</p>
      <p className="text-sm font-normal pt-6">{prop.description}</p>
     </div>
    </>
  );
};

HeroText.proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroText;
