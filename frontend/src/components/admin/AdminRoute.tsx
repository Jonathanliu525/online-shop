import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isAuth } from '../../helps/auth';
import { Jwt } from '../../store/models/auth';

interface AdminRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const AdminRoute: FC<AdminRouteProps> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        const {
          user: { role },
        } = isAuth() as Jwt;
        if (role === 1) {
          return <Component {...routeProps} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

export default AdminRoute;
