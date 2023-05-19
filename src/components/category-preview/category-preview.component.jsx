import React from "react";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CategoryPreview = ({ title, products }) => {
  return (
    // <div className="category-preview-container">
    // <h2>
    //   <Link className="title" to={title}>
    //     {title.toUpperCase()}
    //   </Link>
    // </h2>
    // <div className="preview">
    //   {products
    //     .filter((_, idx) => idx < 4)
    //     .map((product) => (
    //       <ProductCard key={product.id} product={product} />
    //     ))}
    // </div>
    // </div>
    <Container className="category-preview-container">
      <Row>
        <Col>
          <h2>
            <Link className="" to={title}>
              {title.toUpperCase()}
            </Link>
          </h2>
        </Col>
      </Row>
      <Row>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <Col xs={12} md={6} lg={3}>
              <ProductCard key={product.id} product={product} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default CategoryPreview;
