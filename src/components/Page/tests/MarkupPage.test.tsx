/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React from 'react';
import MarkupPage from '../Standard/MarkupPage';

describe('std markup page', () => {
  test('content as strings', () => {
    const { queryAllByText } = render(
      <MarkupPage content="Some mock paragraph" title="test" />
    );
    const arr = queryAllByText('Some mock paragraph');
    expect(arr.length).toBeGreaterThan(0);
  });
  test('content as string[]', () => {
    const mockPars = ['hello', 'world'];
    const { queryAllByText } = render(
      <MarkupPage content={mockPars} title="test" />
    );
    const arr = queryAllByText(/([hello|world])/);
    expect(arr.length).toBeGreaterThan(1);
  });
});
