import { Link } from "react-router-dom";
import ProductCard from "../Product-cards/Product-cards";
import "./CatagoryPreview.css";
import React from "react";

const CatagoryPreview = ({ title, products }) => {
  return (
    <div className="CatagoryPreview-container">
      <h2>
        <Link to={title} className="CatagoryPreview-title">{title.toUpperCase()}</Link>
      </h2>
      <div className="CatagoryPreview">
        {products.filter((_, idx) => idx < 4)
        .map((product)=><ProductCard key={product.id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default CatagoryPreview;
