import { Button, Card, Col, Row } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../store/models/products';

interface ProdcutItemProps {
  product: Product;
}

const ProductItem: FC<ProdcutItemProps> = ({ product }) => {
  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
      actions={[
        <Button type="link">
          <Link to="">See details</Link>
        </Button>,
        <Button type="link">
          <Link to="">Add to cart</Link>
        </Button>,
      ]}
    >
      <Title level={5}>{product.name}</Title>
      <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
      <Row>
        <Col span="12">Sold: {product.sold}</Col>
        <Col span="12" style={{ textAlign: 'right' }}>
          Price: {product.price}
        </Col>
      </Row>
      <Row>
        <Col span="12">Created: {product.createdAt}</Col>
        <Col span="12" style={{ textAlign: 'right' }}>
          Category: {product.category}
        </Col>
      </Row>
    </Card>
  );
};

export default ProductItem;
