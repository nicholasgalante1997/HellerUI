/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  test('renders a default badge with text', async () => {
    render(<Badge>New!</Badge>);
    expect(screen.getByText('New!')).toBeInTheDocument();
  });
});
