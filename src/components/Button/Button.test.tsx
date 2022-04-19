/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';
import colors from '../../globals/styles/colors';

const textColor = '#F3F4F6';

describe('Button', () => {
  /**
   * Default render tests
   */
  test('renders a default button with text', async () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: colors.yossarian.sea,
      color: textColor,
      padding: '0.25rem 0.5rem',
      fontSize: '0.75rem'
    });
  });

  /**
   * Custom Colors render tests
   */
  test('renders a button with custom colors', async () => {
    render(
      <Button color="#1E40AF" backgroundColor="#A78BFA">
        Click me
      </Button>
    );

    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: '#A78BFA',
      color: '#1E40AF'
    });
  });

  /**
   * Mock Function call tests
   */
  test('handles onClick', async () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
