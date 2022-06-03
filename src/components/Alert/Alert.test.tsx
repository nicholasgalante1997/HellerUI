import * as React from 'react';
import { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Alert, DarkAlertVariantDict, AlertVariantDict } from './Alert';
import colors from '../../globals/styles/colors';
import ColorScale from 'color-scales';

const infoColorPalette = new ColorScale(0, 100, [
  AlertVariantDict.info,
  DarkAlertVariantDict.info
]);

const warningColorPalette = new ColorScale(0, 100, [
  AlertVariantDict.warning,
  DarkAlertVariantDict.warning
]);

const errorColorPalette = new ColorScale(0, 100, [
  AlertVariantDict.error,
  DarkAlertVariantDict.error
]);

const successColorPalette = new ColorScale(0, 100, [
  AlertVariantDict.success,
  DarkAlertVariantDict.success
]);

describe('Alert', () => {
  test('renders a default Alert', () => {
    const mockFn = jest.fn();
    render(<Alert title="testTitle" onClose={mockFn} isVisible />);
    expect(screen.getByText('testTitle')).toBeInTheDocument();

    const parentContainer = screen.getByTestId('grid container');
    const textContainer = screen.getByTestId('alert-text-container');
    const actionContainer = screen.getByTestId('alert-action-container');
    const buttonContainer = screen.getByTestId('alert-close-button');
    expect(parentContainer).toHaveStyle({
      background: AlertVariantDict.info,
      padding: '0px',
      flexWrap: 'nowrap'
    });

    expect(textContainer).toHaveStyle({
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'
    });

    expect(actionContainer).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: '8px'
    });

    expect(buttonContainer).toHaveStyle({
      color: infoColorPalette.getColor(60).toHexString()
    });
  });

  test('renders a warning Alert', () => {
    const mockFn = jest.fn();
    render(
      <Alert title="testTitle" onClose={mockFn} isVisible variant="warning" />
    );

    const parentContainer = screen.getByTestId('grid container');
    const textContainer = screen.getByTestId('alert-text-container');
    const text = textContainer.firstChild;
    const actionContainer = screen.getByTestId('alert-action-container');
    const buttonContainer = screen.getByTestId('alert-close-button');
    expect(parentContainer).toHaveStyle({
      background: AlertVariantDict.warning
    });

    expect(text).toBeInTheDocument();

    expect(text).toHaveStyle({
      color: warningColorPalette.getColor(70).toHexString()
    });

    expect(buttonContainer).toHaveStyle({
      color: warningColorPalette.getColor(60).toHexString()
    });
  });

  test('renders an error Alert', () => {
    const mockFn = jest.fn();
    render(
      <Alert title="testTitle" onClose={mockFn} isVisible variant="error" />
    );

    const parentContainer = screen.getByTestId('grid container');
    const textContainer = screen.getByTestId('alert-text-container');
    const text = textContainer.firstChild;
    const actionContainer = screen.getByTestId('alert-action-container');
    const buttonContainer = screen.getByTestId('alert-close-button');
    expect(parentContainer).toHaveStyle({
      background: AlertVariantDict.error
    });

    expect(text).toBeInTheDocument();

    expect(text).toHaveStyle({
      color: errorColorPalette.getColor(70).toHexString()
    });

    expect(buttonContainer).toHaveStyle({
      color: errorColorPalette.getColor(60).toHexString()
    });
  });

  test('renders a success Alert', () => {
    const mockFn = jest.fn();
    render(
      <Alert title="testTitle" onClose={mockFn} isVisible variant="success" />
    );

    const parentContainer = screen.getByTestId('grid container');
    const textContainer = screen.getByTestId('alert-text-container');
    const text = textContainer.firstChild;
    const actionContainer = screen.getByTestId('alert-action-container');
    const buttonContainer = screen.getByTestId('alert-close-button');
    expect(parentContainer).toHaveStyle({
      background: AlertVariantDict.success
    });

    expect(text).toBeInTheDocument();

    expect(text).toHaveStyle({
      color: successColorPalette.getColor(70).toHexString()
    });

    expect(buttonContainer).toHaveStyle({
      color: successColorPalette.getColor(60).toHexString()
    });
  });

  test('tests onClose changes isVisible property', () => {
    const MockComponent = () => {
      const [visibility, setVisibility] = useState(true);
      const onClick = () => {
        setVisibility(false);
      };
      return (
        <Alert title="testTitle" onClose={onClick} isVisible={visibility} />
      );
    };
    render(<MockComponent />);
    const parentContainer = screen.getByTestId('grid container');
    const actionContainer = screen.getByTestId('alert-action-container');
    const buttonContainer = screen.getByTestId('alert-close-button');

    expect(buttonContainer).toBeInTheDocument();

    expect(parentContainer).toBeInTheDocument();
    expect(parentContainer).toHaveStyle({
      display: 'flex'
    });
    fireEvent.click(buttonContainer);
    expect(parentContainer).toHaveStyle({
      display: 'none'
    });
  });
});
