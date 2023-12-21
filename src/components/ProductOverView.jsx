import React from "react";
import Styles from "./productOverView.module.css";

function ProductOverView({ id, img, name, ProductDetailsById }) {
  const clickHandler = () => {
    ProductDetailsById(id);
  };

  return (
    <button className={`${Styles.container}`} onClick={clickHandler}>
      <h3 className={`${Styles.title}`}>{name}</h3>
      <img src={img} alt={name} className="img-fluid" />
    </button>
  );
}

export default ProductOverView;
