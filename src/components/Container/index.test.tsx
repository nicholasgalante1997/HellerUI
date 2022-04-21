import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Container from './index';

describe('Container', () => {
  test('dynamic height and width', () => {
    const { container } = render(<Container height={100} width={200} />);
    expect(container.firstChild).toHaveStyle('height: 100px');
    expect(container.firstChild).toHaveStyle('width: 200px');
  });
  test('background color', () => {
    const { container } = render(
      <Container height={100} width={200} background="red" />
    );
    expect(container.firstChild).toHaveStyle('background: red;');
  });
  test('background image', () => {
    const url = 'https://placedog.net/500';
    const { container } = render(
      <Container height={100} width={200} image={url} />
    );
    expect(container.firstChild).toHaveStyle(`background-image: url(${url});`);
    expect(container.firstChild).toHaveStyle('background-repeat: no-repeat;');
    expect(container.firstChild).toHaveStyle('background-size: cover;');
    expect(container.firstChild).toHaveStyle('object-fit: cover;');
  });
  test('gradient', () => {
    const gradient = {
      to: 'pink',
      from: 'purple',
      flow: 'to left'
    } as const;
    const { container } = render(
      <Container height={100} width={200} gradient={gradient} />
    );
    expect(container.firstChild).toHaveStyle(
      `background: linear-gradient(${gradient.flow}, ${gradient.from}, ${gradient.to});`
    );
  });
  test('onClick', () => {
    const mockFn = jest.fn();
    const { container } = render(
      <Container onClick={mockFn} height={100} width={200} />
    );

    expect(container).not.toBeNull();
    expect(container).toBeInTheDocument();

    fireEvent.click(container.firstChild!);

    expect(mockFn).toHaveBeenCalled();
  });
  test('radius normal', () => {
    const { container } = render(<Container height={100} width={200} />);
    expect(container.firstChild).toHaveStyle('border-radius: 2px;');
  });
  test('radius rounded', () => {
    const { container } = render(
      <Container height={100} width={200} radius="rounded" />
    );
    expect(container.firstChild).toHaveStyle('border-radius: 6px;');
  });
  test('radius none', () => {
    const { container } = render(
      <Container height={100} width={200} radius="none" />
    );
    expect(container.firstChild).toHaveStyle('border-radius: 0px;');
  });
});
