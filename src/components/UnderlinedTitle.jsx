import PropTypes from "prop-types"

function UnderlinedTitle({text}) {
  return ( 
    <p className="title__underline">{text}</p>
   );
}

UnderlinedTitle.propTypes = {
  text: PropTypes.string
}

export default UnderlinedTitle;