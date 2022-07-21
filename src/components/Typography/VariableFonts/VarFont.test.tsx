import React from 'react';
import { render } from '@testing-library/react';
import VarFont from './VarFont';
import { TextElementKeyType } from './types';

describe('VariableFont', () => {
  test('default', () => {
    const { container } = render(
      <VarFont fontKey="Sarala - v10" implementation="h2">
        chief and dumpling
      </VarFont>
    );
    expect(container).toMatchSnapshot();
  });
  test('forwards styles', () => {
    const style = { fontStyle: 'italic' };
    const { container, queryByTestId } = render(
      <VarFont
        data-testid="varfont"
        customStyles={style}
        fontKey="Sarala - v10"
        implementation="h2"
      >
        chief and dumpling
      </VarFont>
    );
    expect(queryByTestId('varfont')).toHaveStyle(style);
    expect(container).toMatchSnapshot();
  });
  test('implementations', () => {
    const impls: readonly TextElementKeyType[] = [
      'b',
      'code',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'i',
      'span'
    ] as const;
    for (const i of impls) {
      const { container, unmount } = render(
        <VarFont
          data-testid="varfont"
          fontKey="Sarala - v10"
          implementation={i}
        >
          chief and dumpling
        </VarFont>
      );
      expect(container).toMatchSnapshot();
      unmount();
    }
  });
});
