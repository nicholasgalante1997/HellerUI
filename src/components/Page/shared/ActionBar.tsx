import React from 'react';
import { ActionBarProps } from '../types';
import Container from '../../Container';
import * as Font from '../../Typography';

const { Heading } = Font;

const ActionBar = (props: ActionBarProps) => {
  const { titleColor, actionTitle, actionContainer } = props;
  const safeHeadingComponent = typeof actionTitle === 'string'
    ? (<Heading color={titleColor ?? 'white'}>{actionTitle}</Heading>)
    : props.actionTitle;

  return (
    <Container
      background="inherit"
      height="1.5rem"
      width="100%"
      customStyles={{
        flexDirection: 'row',
        justifyContent: actionContainer ? 'space-between' : 'flex-start',
        alignItems: 'center',
      }}
    >
      {safeHeadingComponent}
      {actionContainer
        ? (
          <Container
            width="fit-content"
            height="100%"
            background="inherit"
            customStyles={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            {actionContainer}
          </Container>
        )
        : null}
    </Container>
  );
};

export default ActionBar;
