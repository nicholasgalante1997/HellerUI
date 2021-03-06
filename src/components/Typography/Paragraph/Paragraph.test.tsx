import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from './Paragraph';

describe('Paragraph', () => {
  test('default', () => {
    const { container } = render(<Paragraph>Heller UI</Paragraph>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle("font-family: 'Poppins Regular';");
    expect(container.firstChild).toHaveStyle('font-weight: 200;');
    expect(container.firstChild).toHaveStyle('font-size: 1rem;');
    expect(container.firstChild).toMatchSnapshot();
  });
  test('dynamic color', () => {
    const { container } = render(
      <Paragraph color="deeppink">Heller UI</Paragraph>
    );
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle('color: deeppink;');
    expect(container.firstChild).toMatchSnapshot();
  });
  test('italic', () => {
    const { container } = render(<Paragraph italic>Heller UI</Paragraph>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle("font-family: 'Poppins Italic';");
    expect(container.firstChild).toHaveStyle('font-style: normal;');
    expect(container.firstChild).toMatchSnapshot();
  });
  test('bold', () => {
    const { container } = render(<Paragraph bold>Heller UI</Paragraph>);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle('font-weight: 800;');
    expect(container.firstChild).toMatchSnapshot();
  });
  test('italic & bold', () => {
    const { container } = render(
      <Paragraph italic bold>
        Heller UI
      </Paragraph>
    );
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle('font-style: normal;');
    expect(container.firstChild).toHaveStyle(
      "font-family: 'Poppins BoldItalic';"
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
