import React from 'react';
import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils"
import { useDispatch } from "react-redux";
import {setCategories} from '../../Store/Categories/Category.action';
import { useEffect } from "react";

const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getCategoryMap = async () => {
        const categories = await getCategoriesAndDocument();
        dispatch(setCategories(categories));
    }
    getCategoryMap();
},[dispatch])

    return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    )
}

export default Shop
