import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../Store/Categories/Category.selector";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <h2 className="title">{category.toUpperCase()}</h2>
          </Col>
        </Row>
        <Row>
          {products &&
            products.map((product) => (
              <Col xs={12} md={6} lg={3}>
                <ProductCard key={product.id} product={product} />
              </Col>
            ))}
        </Row>
      </Container>
      {/* <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div> */}
    </Fragment>
  );
};

export default Category;
