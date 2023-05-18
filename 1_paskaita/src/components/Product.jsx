import PropTypes from "prop-types";

// arrow funkcija ir props destrukcija
const Product = ({ category, name, price }) => {
  return (
    <div className="productCard">
      <div className="category">{category}</div>
      <div>{name}</div>
      <div className="price">{price}</div>
    </div>
  );
};

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
