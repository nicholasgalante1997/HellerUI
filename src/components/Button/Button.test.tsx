import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button, ButtonVariants } from './Button';
import colors from '../../colors';

const textColor = '#F3F4F6';

describe('Button', () => {
  /**
   * Default render
   */
  test('renders a default button with text', async () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: colors.nately.lavenderGray,
      color: textColor,
    });
  });

  /**
   * Twilight variant render
   */
  test('renders a button with the twilight color variant', async () => {
    render(<Button variant={ButtonVariants.twilight}>Click me</Button>);

    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: `linear-gradient(to right, ${colors.nately.darkPurple}, ${colors.nately.middleBluePurple})`,
      color: '#F3F4F6',
    });
  });

  /**
   * Rose Garden variant render
   */
   test('renders a button with the rose garden color variant', async () => {
    render(<Button variant={ButtonVariants.roseGarden}>Click me</Button>);

    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: `linear-gradient(to right, ${colors.dunbar.amaranthPurple}, ${colors.dunbar.lightPink})`,
      color: '#F3F4F6',
    });
  });
  /**
   * Custom Colors render
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
   * Mock Function call
   */
  test('handles onClick', async () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
