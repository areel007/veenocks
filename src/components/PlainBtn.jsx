import PropTypes from "prop-types";

function PlainBtn({ text }) {
  return (
    <button className="uppercase text-[12px] tracking-[2px] leading-[1.2] block hover:bg-black hover:text-white border border-black p-[5px_10px] md:p-[10px_20px]">
      {text}
    </button>
  );
}

PlainBtn.propTypes = {
  text: PropTypes.string,
};

export default PlainBtn;
