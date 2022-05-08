import {
  Container,
  Page,
  Button,
  _heller_base,
  Typography
} from '@nickgdev/hellerui';
import { Nav } from '../components/nav';
import { mdPassage } from '../utils/miloExcerpt';

const { Paragraph, Heading } = Typography;

/** Markdown Page Renderer Components */

const markdownContent = 
`* The heller ui markdown page is for those developers who compromise on neither speed nor cleanliness (which is next to godliness).

<br />

##### A Moment to Ramble

<br /> 

Below is a few excerpts from Catch 22 written in markdown to show how easy it is to get a content driven site up and looking good with hellerui.

_Without further ado_

${mdPassage}

`

export function MarkdownPage() {
  return (
    <>
      <Nav />
      <Container height={'fit-content'}>
        <Container>
          <Page
            padding={'0rem'}
            margin={'0rem'}
            contentEngine="markdown"
            content={markdownContent}
            customComponentMap={{
              img: ({ node, ...props }) => (
                <img {...props} style={{ width: '100%', height: '400px' }} />
              ),
              p: ({ node, ...props }) => (
                <Paragraph {...props} fontSize={14} customStyles={{ maxWidth: '95%' }} color="white" />
              ),
              h5: ({ node, ...props }) => (
                <Heading {...props} as='h5' color='#EF4880' />
              )
            }}
            title="Heller as a Markdown Engine"
            titleColor='deeppink'
            titleSize='h3'
            withDividers
            dividerProps={{
              fadeColor: 'white',
              focusColor: 'white'
            }}
          />
        </Container>
      </Container>
    </>
  );
}
