import {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsCategoriesLoading } from "../../store/catagory/category.selector";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner.component";
import ProductCard from "../../components/Product-cards/Product-cards";
import "./Category.css";

type CategoryRouteParams = {
  category:string;
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsCategoriesLoading)
  const [products, setProducts] = useState(categoriesMap[category]);
  
 
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <h2 className="cate-title">{category.toUpperCase()}</h2>
      {
        isLoading ? <Spinner/> :
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      }

    </Fragment>
  );
};

export default Category;
