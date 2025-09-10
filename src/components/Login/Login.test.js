// Mocks must come first

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
  firebaseAuth.createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({ user: {} }));
  firebaseAuth.signInWithEmailAndPassword = jest.fn(() => Promise.resolve({ user: {} }));
  firebaseAuth.updateProfile = jest.fn();
});
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Login from './Login';
import appStore from '../../utils/appStore';

describe('Login Component', () => {
  test('renders Sign In form by default', () => {
    render(
      <Provider store={appStore}>
        <Login />
      </Provider>
    );
    // There are two elements with 'Sign In' text: h1 and button
    const signInHeadings = screen.getAllByText(/Sign In/i);
    expect(signInHeadings.length).toBeGreaterThan(0);
    expect(screen.getByPlaceholderText(/Email or mobile number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  test('toggles to Sign Up form', () => {
    render(
      <Provider store={appStore}>
        <Login />
      </Provider>
    );
    fireEvent.click(screen.getByText(/Sign up now/i));
    // There are two elements with 'Sign Up' text: h1 and button
    const signUpHeadings = screen.getAllByText(/Sign Up/i);
    expect(signUpHeadings.length).toBeGreaterThan(0);
    expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
  });

  test('shows error for empty email and password', () => {
    render(
      <Provider store={appStore}>
        <Login />
      </Provider>
    );
    // Click the button, not the heading
    const signInButtons = screen.getAllByText(/Sign In/i);
    fireEvent.click(signInButtons[1]);
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });
});
