import PropTypes from "prop-types";
import "./Photo.css";

const Photo = ({ url, title }) => {
  return (
    <div>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Photo;
