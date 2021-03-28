import { Button, Form, Input, Result } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isAuth } from '../../helps/auth';
import { signin, SigninPayload } from '../../store/actions/auth.action';
import { Jwt } from '../../store/models/auth';
import { AppState } from '../../store/reducers';
import { AuthState } from '../../store/reducers/auth.reducer';
import Layout from './Layout';

const Signin = () => {
  const dispatch = useDispatch();
  const onFinish = (value: SigninPayload) => {
    dispatch(signin(value));
  };

  //get login state
  const authState = useSelector<AppState, AuthState>((state) => state.auth);
  //if failed show erro
  const showError = () => {
    if (authState.signin.loaded && !authState.signin.success) {
      return (
        <Result
          status="warning"
          title="Failed to  Login!"
          subTitle={authState.signin.message}
        />
      );
    }
  };
  //if success jump to Dashborad

  const redirectToDashboard = () => {
    const auth = isAuth();
    if (auth) {
      const {
        user: { role },
      } = auth as Jwt;
      if (role === 0) {
        //normal user
        return <Redirect to="/user/dashboard" />;
      } else {
        //admin
        return <Redirect to="/admin/dashboard" />;
      }
    }
  };

  //deal with navigation

  const signinForm = () => {
    return (
      <Form onFinish={onFinish}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Layout title="Login">
      {showError()}
      {redirectToDashboard()}
      {signinForm()}
    </Layout>
  );
};

export default Signin;
