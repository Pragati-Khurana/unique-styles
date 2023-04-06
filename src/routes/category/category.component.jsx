import React, {useContext, useState, useEffect, Fragment} from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../Store/Categories/Category.selector';

const Category = () => {
    // const {categoriesMap} = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
  return (
    <Fragment>
        <h2 className='title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            {
            products && products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
            }
        </div>
    </Fragment>
  )
}

export default Category
