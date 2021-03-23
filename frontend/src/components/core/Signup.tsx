import { Button, Form, Input } from 'antd';
import React from 'react';
import Layout from './Layout';

const Signup = () => {
  return (
    <Layout title="Registration">
      <Form>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Signup;
