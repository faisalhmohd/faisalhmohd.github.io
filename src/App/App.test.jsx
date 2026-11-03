import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '.';

describe('portfolio', () => {
  it('renders the identity, sections and working social destinations', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Mohammad Faisal' })).toBeInTheDocument();
    for (const name of ['Portfolio', 'Work', 'Online']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument();
    }
    expect(screen.getByRole('link', { name: 'github' })).toHaveAttribute('href', 'https://github.com/faisalhmohd');
  });
});
