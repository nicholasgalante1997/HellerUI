import { Container, Button } from '@nickgdev/hellerui';
import { useNavigate } from 'react-router-dom';

export function HomeActionContainer() {
  let navigate = useNavigate();
  return (
    <Container
      width="fit-content"
      customStyles={{ margin: '1rem', flexDirection: 'row' }}
    >
      <Button
        className="home-btn"
        ghost
        color="white"
        backgroundColor="#FFFFFF"
        onClick={() => navigate('/markdown')}
      >
        Markdown Page Demo
      </Button>
      <Button
        className="home-btn"
        ghost
        color="white"
        backgroundColor="#FFFFFF"
        onClick={() => navigate('/jsx-page')}
      >
        JSX Page Demo
      </Button>
      <Button
        className="home-btn"
        ghost
        color="white"
        backgroundColor="#FFFFFF"
        onClick={() => navigate('/faq')}
      >
        FAQ
      </Button>
      <Button
        className="home-btn"
        ghost
        color="white"
        backgroundColor="#FF0095"
        onClick={() => navigate('/manifesto')}
      >
        Sheer Propaganda
      </Button>
    </Container>
  );
}
