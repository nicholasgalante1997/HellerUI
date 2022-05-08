import { Container, Typography } from '@nickgdev/hellerui';
import { HomeActionContainer } from '../components/homeActionBar';
import { defaultContainerStyles } from '../utils/container';

const { Heading, Paragraph } = Typography;

export function Home() {
  return (
    <Container customStyles={defaultContainerStyles}>
      <Container
        customStyles={{
          ...defaultContainerStyles,
          minHeight: '100vh'
        }}
      >
        <Heading color="white">hellerui</Heading>
        <hr color="white" style={{ width: '50%' }} />
        <Paragraph color="white" thin>
          a design system that wants to live
        </Paragraph>
        <HomeActionContainer />
      </Container>
    </Container>
  );
}
