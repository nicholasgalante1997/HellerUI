import { Container } from '@nickgdev/hellerui';
import { Nav } from '../components/nav';
import { Widget } from '../components/widget';
import { defaultContainerStyles } from '../utils/container';
import { faqs } from '../utils/faqs';

export function FAQ() {
  return (
    <Container
      width={'100%'}
      customStyles={{
        ...defaultContainerStyles
      }}
    >
      <Nav />
      {faqs.map((w, i) => (
        <Widget {...w} even={i === 0 || i % 2 === 0} />
      ))}
    </Container>
  );
}
