import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Feed from './Feed';
import { BrowserRouter } from 'react-router-dom';

test('renders Feed component', () => {
  render(
    <BrowserRouter>
      <Feed />
    </BrowserRouter>
  );
  // Adicione asserções conforme necessário para verificar a renderização correta.
});

test('navigates to home when button is clicked', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Feed />
    </BrowserRouter>
  );
  const homeButton = getByText('Home');
  fireEvent.click(homeButton);
  // Adicione asserções conforme necessário para verificar a navegação.
});
