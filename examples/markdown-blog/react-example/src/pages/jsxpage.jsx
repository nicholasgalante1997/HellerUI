import { Container, Page, Button } from '@nickgdev/hellerui';
import { Nav } from '../components/nav';
import { JSXContent } from '../components/jsxContent';

export function JSXPage() {
  return (
    <>
      <Nav />
      <Container height={'fit-content'}>
        <Container>
          <Page
            contentEngine="normal"
            content={<JSXContent />}
            title="Heller as a JSX/Plain Text Engine"
            titleColor='deeppink'
            titleSize='h3'
            withDividers
            subtitle="okay so markdown isnt for everyone"
            subtitleSize='sm'
          />
        </Container>
      </Container>
    </>
  );
}
