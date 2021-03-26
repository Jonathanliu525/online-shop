import { Menu } from 'antd';
import { RouterState } from 'connected-react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isAuth } from '../../helps/auth';
import { Jwt } from '../../store/models/auth';
import { AppState } from '../../store/reducers';

function useActive(currentPath: string, path: string) {
  return currentPath === path ? 'ant-menu-item-selected' : '';
}

const Navigation = () => {
  const router = useSelector<AppState, RouterState>((state) => state.router);
  const pathname = router.location.pathname;
  const isHome = useActive(pathname, '/');
  const isShop = useActive(pathname, '/shop');
  const isSignup = useActive(pathname, '/signup');
  const isSignin = useActive(pathname, '/signin');
  const isDashboard = useActive(pathname, getDashboardUrl());

  function getDashboardUrl() {
    let url = '/user/dashboard';
    if (isAuth()) {
      const {
        user: { role },
      } = isAuth() as Jwt;

      if (role === 1) {
        url = '/admin/dashboard';
      }
    }

    return url;
  }
  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item className={isHome}>
        <Link to="/">HomePage</Link>
      </Menu.Item>
      <Menu.Item className={isShop}>
        <Link to="/shop">OnlineShop</Link>
      </Menu.Item>
      {isAuth() ? (
        <Menu.Item className={isDashboard}>
          <Link to={getDashboardUrl()}>Dashboard</Link>
        </Menu.Item>
      ) : (
        <>
          <Menu.Item className={isSignup}>
            <Link to="/signup">Signup</Link>
          </Menu.Item>
          <Menu.Item className={isSignin}>
            <Link to="/signin">Signin</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default Navigation;
