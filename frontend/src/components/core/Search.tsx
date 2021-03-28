import { Button, Col, Divider, Form, Input, Row, Select } from 'antd';
import React from 'react';
import ProductItem from './ProductItem';

function Search() {
  return (
    <>
      <Form layout="inline" initialValues={{ category: 'All' }}>
        <Input.Group compact>
          <Form.Item name="category">
            <Select>
              <Select.Option value="All">All Categories</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="search">
            <Input placeholder="Type to search" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Input.Group>
      </Form>
      <Divider />
      <Row gutter={[16, 16]}>
        <Col span="6">{/* <ProductItem /> */}</Col>
      </Row>
    </>
  );
}

export default Search;
