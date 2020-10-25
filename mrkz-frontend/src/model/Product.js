import React from "react";
import StarIcon from "@material-ui/icons/Star";
import Button from "react-bootstrap/Button";
import "./../css/Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="produce__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <StarIcon />
          ))}
      </div>
      <img src={image} alt="" />
      <Button className="product__button" variant="primary">
        Add to Basket
      </Button>
    </div>
  );
}

export default Product;
