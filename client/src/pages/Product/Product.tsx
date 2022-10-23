import { useEffect } from "react";

import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchAllProductThunk } from "redux/services/product";
import { useParams } from "react-router-dom";
import { Col, Row, ListGroup, Card, Badge, Button } from "react-bootstrap";
import Rating from "components/Rating/Rating";

import "./Product.css";

export default function Product() {
  const dispatch = useAppDispatch();

  const { id } = useParams() as { id: string };

  const products = useAppSelector(
    (state: RootState) => state.products.products
  );

  const product = products.find((product) => product._id === id);

  useEffect(() => {
    dispatch(fetchAllProductThunk());
  }, [dispatch]);

  if (!product) return <h1>Loading product</h1>;

  return (
    <div>
      <Row className="product">
        <Col md={6}>
          <img className="image" src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} reviews={product.reviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? (
                      <Badge bg="success">In Stock</Badge>
                    ) : (
                      <Badge bg="danger">Out of stock</Badge>
                    )}
                  </Col>
                </Row>
              </ListGroup>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button variant="primary">Add to Cart</Button>
                  </div>
                </ListGroup.Item>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
