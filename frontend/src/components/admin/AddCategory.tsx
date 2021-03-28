import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../config';
import { isAuth } from '../../helps/auth';
import { Jwt } from '../../store/models/auth';
import Layout from '../core/Layout';

function AddCategory() {
  const onFinish = async (value: { name: string }) => {
    console.log(value);
    const { user, token } = isAuth() as Jwt;
    try {
      const response = await axios.post<{ name: string }>(
        `${API}/category/create/${user._id}`,
        {
          name: value.name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      message.success(`${response.data.name} added success`);
    } catch (error) {
      console.log(error);
      message.error(error.response.data.error);
    }
  };
  return (
    <Layout title="Add category">
      <Form onFinish={onFinish}>
        <Form.Item label="Category Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
      <Button>
        <Link to="/admin/dashboard">Back to dashboard</Link>
      </Button>
    </Layout>
  );
}

export default AddCategory;
