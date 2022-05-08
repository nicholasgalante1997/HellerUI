import { Container, Typography, Button } from '@nickgdev/hellerui';
import { useNavigate } from 'react-router-dom';

const { Paragraph } = Typography;

export function Nav() {
  let navigate = useNavigate();
  return (
    <Container height={'12vh'} asGridParent>
      <Container
        asGridChild
        colSpan={4}
        customStyles={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}
      >
        <Paragraph fontSize={1.275 * 16} thin color="deeppink">
          Heller UI Pages
        </Paragraph>
      </Container>
      <Container
        asGridChild
        colSpan={8}
        customStyles={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center'
        }}
      >
        <Button
          ghost
          color="white"
          backgroundColor="#FFFFFF"
          onClick={() => navigate('/')}
        >
          back to home
        </Button>
      </Container>
    </Container>
  );
}
