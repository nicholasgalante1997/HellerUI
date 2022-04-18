import React from 'react';
import Container from '../../Container';
import * as Font from '../../Typography';

export type ContentSectionProps = {
    heading: string;
    text: string;
    // eslint-disable-next-line react/require-default-props
    color?: string;
};

// eslint-disable-next-line import/prefer-default-export
export const ContentSectionMap = (props: ContentSectionProps) => {
  const { heading, text, color = 'white' } = props;
  return (
    <Container customStyles={{ justifyContent: 'start', alignItems: 'start' }} padding="0px" margin="0px" width="100%">
      <Font.Heading as="h6" color={color}>
        {heading}
      </Font.Heading>
      <br />
      <Font.Paragraph color={color} fontSize={20}>
        {text}
      </Font.Paragraph>
    </Container>
  );
};
