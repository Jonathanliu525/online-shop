import { Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';
import Search from './Search';
import ProductItem from './ProductItem';
import { getProduct } from '../../store/actions/product.action';
import { AppState } from '../../store/reducers';
const { Title } = Typography;

export default function Home() {
  useEffect(() => {
    dispatch(getProduct('createdAt'));
    dispatch(getProduct('sold'));
  }, []);
  const dispatch = useDispatch();
  const { createdAt, sold } = useSelector((state: AppState) => state.product);
  return (
    <Layout title="E-shop" subTitle="Enjoy you life">
      {/* <Search /> */}
      <Title level={5}>Most Recently</Title>
      <Row gutter={[16, 16]}>
        {createdAt.products.map((product) => (
          <Col span="6">
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
      <Search />
      <Title level={5}>Most Popular</Title>
      <Row gutter={[16, 16]}>
        {sold.products.map((product) => (
          <Col span="6">
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
