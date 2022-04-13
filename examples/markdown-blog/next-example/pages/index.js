import React from 'react';
import { Container, Typography } from '@nickgdev/hellerui';
import '@nickgdev/hellerui/lib/index.css';
import styles from '../styles/Home.module.css';

const { Heading, Paragraph } = Typography;

function Nav() {
  return (
    <Container
      height="15vh"
      width="100%"
      customStyles={{
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid black',
      }}
    >
      <Container
        customStyles={{
          alignContent: 'center',
        }}
        height="100%"
      >
        <Container
          image="https://www.freeiconspng.com/thumbs/maggie-simpson-png/maggie-simpson-png-3.png"
          height="100%"
          width="80px"
        />
        <Heading
          color="violet"
          scale={100}
          customStyles={{
            marginLeft: '0.25rem',
            fontSize: '2rem',
          }}
        >
          hellerui mdx blog
        </Heading>
      </Container>

      <Container height="100%">
        <Paragraph
          customStyles={{
            marginLeft: '1rem',
            marginRignt: '1rem',
            fontSize: '1.5rem',
          }}
          color="black"
          bold
        >
          New
        </Paragraph>
        <Paragraph
          customStyles={{
            marginLeft: '1rem',
            marginRignt: '1rem',
            fontSize: '1.5rem',
          }}
          color="black"
          bold
        >
          Saved
        </Paragraph>
        <Paragraph
          customStyles={{
            marginLeft: '1rem',
            marginRignt: '1rem',
            fontSize: '1.5rem',
          }}
          color="black"
          bold
        >
          My Account
        </Paragraph>
      </Container>
    </Container>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Container
        height="100%"
        width="100%"
        customStyles={{
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Heading
          customStyles={{
            marginBottom: 0,
            marginTop: '0.25rem',
            textAlign: 'center',
          }}
          color="black"
        >
          hellerui
        </Heading>
        <Paragraph color="violet" italic>
          a design system that wants to live
        </Paragraph>
      </Container>
    </div>
  );
}
