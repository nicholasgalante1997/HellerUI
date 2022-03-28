# Heller UI

![Orr](/src/assets/orr.jpeg)

## A Note From The Maintainer

*Hey there everybody!*  

I hope you are having a great night! As i should have mentioned much earlier, this react component library/ui-kit is very much so a work in progress! Moving forward, all versions until *release* will be versioned under 1.0.0. That means that the most up to date version at the time of writing is 0.0.15! If you are on that version, you are killing it!  

If you'd like to leave feedback about the package, please feel free to raise an issue on our github!  

Right now components that are available for consumption are: 

* Typography (Heading & Paragraph)
* Button  

## Installation

To get started, run

`npm install @nickgdev/hellerui`

or

`yarn add @nickgdev/hellerui`

### Example Usage

```typescript

import React from 'react';
import { Button, Typography } from '@nickgdev/hellerui';
import '@nickgdev/hellerui/index.css'

const { Heading, Paragraph } = Typography;

const MyPage = () => {
    const onSubmit = () => { /** some post logic */};
    return (
      <section>
         <Heading as="h1" color="violet">My Website!</Heading>
         <Paragraph italic>Join now!</Paragraph>
         <Button onClick={onSubmit} color="white" backgroundColor="darkblue">
           <p>Submit</p>
         </Button>
      <section>
    );
};

```
