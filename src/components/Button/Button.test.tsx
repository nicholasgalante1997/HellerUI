/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button, ButtonVariants } from './Button';
import colors from '../../colors';

const textColor = '#F3F4F6';

describe('Button', () => {
  /**
   * Default render tests
   */
  test('renders a default button with text', async () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: colors.nately.lavenderGray,
      color: textColor,
      padding: '10px 20px',
      fontSize: '1rem',
    });
  });

  /**
   * Twilight variant render tests
   */
  test('renders a button with the twilight gradient variant', async () => {
    render(<Button variant={ButtonVariants.twilightGradient}>Click me</Button>);

    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: `linear-gradient(to right, ${colors.nately.darkPurple}, ${colors.nately.middleBluePurple})`,
      color: '#fff',
    });
  });

  /**
   * Rose Garden variant render tests
   */
  test('renders a button with the rose garden color variant', async () => {
    render(<Button variant={ButtonVariants.roseGardenGradient}>Click me</Button>);

    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: `linear-gradient(to right, ${colors.dunbar.amaranthPurple}, ${colors.dunbar.lightPink})`,
      color: '#fff',
    });
  });
  /**
   * Custom Colors render tests
   */
  test('renders a button with custom colors', async () => {
    render(
      <Button color="#1E40AF" backgroundColor="#A78BFA">
        Click me
      </Button>,
    );

    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: '#A78BFA',
      color: '#1E40AF',
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
