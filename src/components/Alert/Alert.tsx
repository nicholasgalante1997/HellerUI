import React from 'react';
import ColorScale from 'color-scales';

import { StyledCloseButton } from './Alert.styles';
import { AlertProps } from './types';

import Container from '../Container';
import { Paragraph } from '../Typography';
import '../../index.css';

export const DarkAlertVariantDict = {
  info: '#08324A',
  error: '#500202',
  warning: '#503502',
  success: '0B471E'
} as const;

export const AlertVariantDict = {
  info: '#BEE3F8',
  error: '#FED7D7',
  warning: '#FEEBC8',
  success: '#C6F6D5'
} as const;

export const Alert = (props: AlertProps) => {
  const {
    className = 'heller-alert',
    id = 'heller-alert-id',
    variant = 'info',
    title,
    isVisible,
    onClose,
    customStyles
  } = props;

  const colorPalette = new ColorScale(0, 100, [
    AlertVariantDict[variant],
    DarkAlertVariantDict[variant]
  ]);

  return (
    //Parent row container
    <Container
      asGridParent
      background={AlertVariantDict[variant]}
      radius="rounded"
      padding="0px"
      customStyles={{
        ...customStyles,
        flexWrap: 'nowrap',
        display: isVisible ? 'flex' : 'none'
      }}
      className={className}
      id={id}
    >
      {/*11 columns of one single row  */}
      <Container
        dataTestId="alert-text-container"
        asGridChild
        customStyles={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}
        colSpan={11}
      >
        <Paragraph color={colorPalette.getColor(70).toHexString()}>
          {title}
        </Paragraph>
      </Container>
      <Container
        dataTestId="alert-action-container"
        asGridChild
        colSpan={1}
        customStyles={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: '8px'
        }}
      >
        <StyledCloseButton
          data-testid={'alert-close-button'}
          color={colorPalette.getColor(60).toHexString()}
          onClick={onClose}
        >
          x
        </StyledCloseButton>
      </Container>
    </Container>
  );
};
