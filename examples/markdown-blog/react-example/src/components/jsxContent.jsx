import { Typography,  } from '@nickgdev/hellerui';
import { plaintextPassage, plaintextPassage2 } from '../utils/miloExcerpt';

const { Heading, Paragraph } = Typography;

/** JSX Page Renderer Components */
export function JSXContent() {
  return (
    <>
      <Heading as="h5" color='#EF4880'>
        A Moment to Ramble II: Return of the Ramble
      </Heading>
      <Paragraph color="white">

      </Paragraph>
      <hr width="90%" color='white' />
      <Heading as="h5" color='#EF4880'>
        from chapter Milo
      </Heading>
      {
        plaintextPassage.split(/\n\n/).map(t => <Paragraph color="white">{t}</Paragraph>)
      }
      <hr width="90%" color='white' />
      <Heading as="h5" color='#EF4880'>
        from chapter Milo the Mayor
      </Heading>
      {
        plaintextPassage2.split(/\n\n/).map(t => <Paragraph color="white">{t}</Paragraph>)
      }
    </>
  );
}
