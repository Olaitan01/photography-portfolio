import PropTypes from "prop-types";

const HeroText = (prop) => {
  return (
    <>
      <div className="w-[90%]  m-auto sm:mt-10 py-10 text-textGrey border-b-2 sm:border-t-2 border-lightDark">
        <p className="text-lg font-normal text-left">{prop.title}</p>
        <p className="text-sm font-normal pt-6 sm:text-xl">
          {prop.description}
        </p>
      </div>
    </>
  );
};

HeroText.proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroText;
