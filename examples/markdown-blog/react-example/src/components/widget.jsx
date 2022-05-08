import { Container, Typography } from '@nickgdev/hellerui';
import { defaultContainerStyles } from '../utils/container';

const { Heading, Paragraph } = Typography;

export function Widget(props) {
  let mutTitleColor = props.even ? 'black' : 'deeppink';
  let mutPTagColor = props.even ? 'deeppink' : 'rgba(270,270,270,0.85)';
  return (
    <Container
      asGridParent
      customStyles={{
        minHeight: '80vh'
      }}
      background={props.backgroundColor}
    >
      {props.even ? (
        <>
          <Container
            asGridChild
            colSpan={4}
            customStyles={defaultContainerStyles}
          >
            <Heading as="h5" color={mutTitleColor}>
              {props.title}
            </Heading>
          </Container>
          <Container
            asGridChild
            colSpan={8}
            customStyles={defaultContainerStyles}
          >
            {props.textArray.map((text) => (
              <Paragraph bold color={mutPTagColor}>
                {text}
              </Paragraph>
            ))}
          </Container>
        </>
      ) : (
        <>
          <Container
            asGridChild
            colSpan={8}
            customStyles={defaultContainerStyles}
          >
            <Paragraph bold color={mutPTagColor}>
              {props.text}
            </Paragraph>
          </Container>
          <Container
            asGridChild
            colSpan={4}
            customStyles={defaultContainerStyles}
          >
            <Heading as="h5" color={mutTitleColor}>
              {props.title}
            </Heading>
          </Container>
        </>
      )}
    </Container>
  );
}
