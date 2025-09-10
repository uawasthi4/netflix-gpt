import * as firebaseAuth from 'firebase/auth';

jest.mock('../../utils/firebase', () => ({ auth: {} }));
jest.mock('firebase/auth');

beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks();

  // Set up the mocks with the functionality we need
  const mockUnsubscribe = jest.fn();
  firebaseAuth.onAuthStateChanged = jest.fn((auth, callback) => {
    callback(null);
    return mockUnsubscribe;
  });
  firebaseAuth.signOut = jest.fn(() => Promise.resolve());
});
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from './Header';
import appStore from '../../utils/appStore';

describe('Header Component', () => {
  test('renders Netflix logo', () => {
    render(
      <Provider store={appStore}>
        <Header />
      </Provider>
    );
    expect(screen.getByAltText(/Netflix Logo/i)).toBeInTheDocument();
  });
});
