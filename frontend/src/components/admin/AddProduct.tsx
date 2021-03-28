import Layout from '../core/Layout';
import { Button, Form, Input, message, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../store/actions/category.action';
import { AppState } from '../../store/reducers';
import { RcFile } from 'antd/lib/upload';
import axios from 'axios';
import { API } from '../../config';
import { isAuth } from '../../helps/auth';
import { Jwt } from '../../store/models/auth';
const AddProduct = () => {
  const [file, setFile] = useState<RcFile>();
  const dispatch = useDispatch();
  const { category } = useSelector((state: AppState) => state.category);
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const { user, token } = isAuth() as Jwt;
  const onFinish = (product: any) => {
    const formData = new FormData();
    for (const attr in product) {
      formData.set(attr, product[attr]);
    }
    if (typeof file !== 'undefined') {
      formData.set('photo', file);
    }

    axios
      .post(`${API}/product/create/${user._id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        () => {
          message.success('Prodcut is added');
        },
        (err) => {
          console.log(err);
          message.error(`Fail to add products ${err.response.data.error}`);
        },
      );
  };
  const renderProductForm = () => (
    <Form initialValues={{ category: '' }} onFinish={onFinish}>
      <Form.Item name="photo" label="photo">
        <Upload
          beforeUpload={(file) => {
            if (file.type !== 'image/*') {
              message.error(`${file.name} is not a png file`);
            } else {
              setFile(file);
            }
            return false;
          }}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input />
      </Form.Item>
      <Form.Item name="price" label="Price">
        <Input />
      </Form.Item>
      <Form.Item name="category" label="Category">
        <Select>
          <Select.Option value="">Please choose the category</Select.Option>
          {category.result.map((category) => (
            <Select.Option value={category._id}>{category.name}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="quantity" label="Quantity">
        <Input />
      </Form.Item>
      <Form.Item name="shipping" label="Shipping">
        <Select>
          <Select.Option value="1">Yes</Select.Option>
          <Select.Option value="0">No</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Product
        </Button>
      </Form.Item>
    </Form>
  );

  return <Layout title="Add Product">{renderProductForm()}</Layout>;
};

export default AddProduct;
