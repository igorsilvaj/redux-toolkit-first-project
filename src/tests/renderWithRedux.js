import { render } from '@testing-library/react';
import { store } from "../redux/store";
import { Provider } from "react-redux";
import App from '../App';

const renderWithRedux = () => {
  return {
    ...render(
      <Provider store={store}>
        <App />
      </Provider>)
  };
};

export default renderWithRedux;
