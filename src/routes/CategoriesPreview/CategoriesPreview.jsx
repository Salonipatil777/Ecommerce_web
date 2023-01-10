import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap , selectIsCategoriesLoading } from "../../store/catagory/category.selector";
import CatagoryPreview from '../../components/catagory-preview/CatagoryPreview'
import Spinner from "../../components/Spinner/Spinner.component";

const CategoriesPreview=()=>{
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectIsCategoriesLoading)
    return(
        <Fragment>
             {
                isLoading ? (<Spinner/>) :
             
             (Object.keys(categoriesMap).map((title)=>{
                const products=categoriesMap[title];
                return(
                <CatagoryPreview key={title} title={title} products={products}/>
                );
                }))}
                
     </Fragment>
    );

};
export default CategoriesPreview;