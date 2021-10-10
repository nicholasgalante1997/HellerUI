/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';
import { HellerVariant, HellerSize } from '../../globals/styles';
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
      backgroundColor: colors.yossarian.sea,
      color: textColor,
      padding: '10px 20px',
      fontSize: '1rem',
    });
  });

  /**
   * Size tests
   */
  test('renders an array of all the prefixed button sizes', async () => {
    render(
      <div>
        <Button size={HellerSize.xs}>
          extra small
        </Button>
        <Button size={HellerSize.sm}>
          small
        </Button>
        <Button size={HellerSize.rg}>
          regular
        </Button>
        <Button size={HellerSize.lg}>
          large
        </Button>
        <Button size={HellerSize.xl}>
          extra large
        </Button>
        <Button size={HellerSize.bb}>
          biggest boy
        </Button>
      </div>,
    );

    expect(screen.getByText('extra small')).toHaveStyle({
      padding: '4px 8px',
      fontSize: '0.5rem',
    });
    expect(screen.getByText('small')).toHaveStyle({
      padding: '8px 16px',
      fontSize: '0.75rem',
    });
    expect(screen.getByText('regular')).toHaveStyle({
      padding: '10px 20px',
      fontSize: '1rem',
    });
    expect(screen.getByText('large')).toHaveStyle({
      padding: '16px 32px',
      fontSize: '1.75rem',
    });
    expect(screen.getByText('extra large')).toHaveStyle({
      padding: '24px 48px',
      fontSize: '2.25rem',
    });
    expect(screen.getByText('biggest boy')).toHaveStyle({
      padding: '32px 64px',
      fontSize: '2.75rem',
    });
  });
  /**
   * Twilight variant render tests
   */
  test('renders a button with the twilight gradient variant', async () => {
    render(<Button variant={HellerVariant.twilightGradient}>Click me</Button>);

    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: `linear-gradient(to right, ${colors.nately.darkPurple}, ${colors.nately.middleBluePurple})`,
      color: '#fff',
    });
  });

  /**
   * Rose Garden variant render tests
   */
  test('renders a button with the rose garden color variant', async () => {
    render(<Button variant={HellerVariant.roseGardenGradient}>Click me</Button>);

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
