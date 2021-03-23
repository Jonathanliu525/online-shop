import { Button, Form, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { SignupPayload, signup } from '../../store/actions/auth.action';
import Layout from './Layout';

const Signup = () => {
  const dispatch = useDispatch();
  const onFinish = (value: SignupPayload) => {
    dispatch(signup(value));
  };
  return (
    <Layout title="Registration">
      <Form onFinish={onFinish}>
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Signup;
