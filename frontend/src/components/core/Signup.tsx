import { Button, Form, Input, Result } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  SignupPayload,
  signup,
  resetSignup,
} from '../../store/actions/auth.action';
import { AppState } from '../../store/reducers';
import { AuthState } from '../../store/reducers/auth.reducer';
import Layout from './Layout';

const Signup = () => {
  //get dispatch
  const dispatch = useDispatch();
  // get auth state
  const authState = useSelector<AppState, AuthState>((state) => state.auth);

  const [form] = Form.useForm();
  const onFinish = (value: SignupPayload) => {
    //send request
    dispatch(signup(value));
  };

  //Register success clean the formm
  useEffect(() => {
    if (authState.signup.loaded && authState.signup.success) {
      form.resetFields();
    }
  }, [authState, form]);
  //Register success show secusse
  const showSuccess = () => {
    if (authState.signup.loaded && authState.signup.success) {
      return (
        <Result
          status="success"
          title="Successfully Registed!"
          extra={[
            <Button type="primary" key="console">
              <Link to="/signin">SignIn</Link>
            </Button>,
          ]}
        />
      );
    }
  };
  //Register fail show info
  const showError = () => {
    if (authState.signup.loaded && !authState.signup.success) {
      return (
        <Result
          status="warning"
          title="Failed to  Registed!"
          subTitle={authState.signup.message}
        />
      );
    }
  };

  //reset state
  useEffect(() => {
    return () => {
      dispatch(resetSignup());
    };
  }, []);

  const signupForm = () => {
    return (
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="Name" name="name">
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
    );
  };
  return (
    <Layout title="Registration">
      {showSuccess()}
      {showError()}
      {signupForm()}
    </Layout>
  );
};

export default Signup;
