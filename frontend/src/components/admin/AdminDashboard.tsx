import { Col, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { Descriptions, Typography } from 'antd';
import { isAuth } from '../../helps/auth';
import { Jwt } from '../../store/models/auth';

const { Title } = Typography;

const AdminDashboard = () => {
  const renderLinks = () => (
    <>
      <Title level={5}>Admin Links</Title>
      <Menu>
        <Menu.Item>
          <Link to="/create/category">Add category</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/create/product">Add product</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="">Order list</Link>
        </Menu.Item>
      </Menu>
    </>
  );

  const {
    user: { name, email },
  } = isAuth() as Jwt;

  const renderAdminInfo = () => (
    <Descriptions title="Admin info" bordered>
      <Descriptions.Item label="Name">{name}</Descriptions.Item>
      <Descriptions.Item label="Email">{email}</Descriptions.Item>
      <Descriptions.Item label="Role">Admin</Descriptions.Item>
    </Descriptions>
  );
  return (
    <Layout title="Admin dashboard">
      <Row gutter={8}>
        <Col span={4}>{renderLinks()}</Col>
        <Col span={20}>{renderAdminInfo()}</Col>
      </Row>
    </Layout>
  );
};

export default AdminDashboard;
