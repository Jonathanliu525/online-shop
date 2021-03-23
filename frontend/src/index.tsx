import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './store/index';
import { API } from './config';
import Routes from './Routes';
import { ConnectedRouter } from 'connected-react-router';
console.log(API);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
