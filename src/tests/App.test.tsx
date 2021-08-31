import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Header/i);
  expect(linkElement).toBeInTheDocument();
});


it('renders correctly', () => {
  const {container} = render(<App />);

  expect(container).toMatchSnapshot();
});
