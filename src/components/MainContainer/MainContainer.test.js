import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MainContainer from './MainContainer';
import appStore from '../../utils/appStore';

describe('MainContainer Component', () => {
  test('renders without crashing', () => {
    render(
      <Provider store={appStore}>
        <MainContainer />
      </Provider>
    );
  });
});
