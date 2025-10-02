import { render, screen } from '@testing-library/react';
import { SignIn } from '../buttons';

// Mock the auth-client module
jest.mock('@/app/lib/auth-client', () => ({
  signIn: jest.fn(),
}));

describe('SignIn button', () => {
  it('renders a sign in button', () => {
    render(<SignIn />);
    const signInButton = screen.getByRole('button', { name: /sign in with github/i });
    expect(signInButton).toBeInTheDocument();
  });
});