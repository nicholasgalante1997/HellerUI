/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';
import colors from '../../colors';

describe('Badge', () => {
  test('renders a default badge with text', async () => {
    render(<Badge>New!</Badge>);
    expect(screen.getByText('New!')).toBeInTheDocument();
    expect(screen.getByText('New!')).toHaveStyle({
      padding: '4px 8px',
      fontSize: '0.75rem',
      borderRadius: '16px',
      backgroundColor: colors.cathcart.blackCoral,
      color: '#fff',
    });
  });
});
