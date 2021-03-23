import { Button, Form, Input } from 'antd';
import React from 'react';
import Layout from './Layout';

const Signin = () => {
  return (
    <Layout title="Login">
      <Form>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Login</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Signin;
