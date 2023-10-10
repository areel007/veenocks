import PropTypes from "prop-types";

function ProductCard({ cardDetails }) {

  return (
    <a href={cardDetails.to} target="_blank" rel="noopener noreferrer" className="w-full relative product__card group cursor-pointer">
      <img src={cardDetails.img} alt="veenocks" className="w-full h-full object-cover" />
      <div className="product__card__overlay"></div>
      <div className="absolute w-full h-full z-[100] top-0 left-0 invisible group-hover:visible p-[40px] flex items-end justify-start text-white">
        <p className="uppercase text-[18px] md:text-[26px] font-[600]">{cardDetails.name}</p>
      </div>
    </a>
  );
}

ProductCard.propTypes = {
  cardDetails: PropTypes.object,
};

export default ProductCard;
