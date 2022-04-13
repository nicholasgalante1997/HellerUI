# Heller UI

![Orr](https://d3d00swyhr67nd.cloudfront.net/w944h944/collection/IWM/IWM/IWM_IWM_16784_5-001.jpg)

__A Note From The Maintainer__

![Hi Everybody!](https://c.tenor.com/ny2kroyiSI4AAAAC/hi-everybody-simpsons.gif)

I hope you are having a great night! As i should have mentioned much earlier, this react component library/ui-kit is very much so a work in progress! Moving forward, all versions until *release* will be versioned under 1.0.0. That means that the most up to date version at the time of writing is 0.0.19! If you are on that version, you are killing it!  

If you'd like to leave feedback about the package, please feel free to raise an issue on our github!  

Right now components that are available for consumption are:

* Typography (Heading & Paragraph)
* Button  
* Container
* MediaTitle

## Installation

To get started, run

`npm install @nickgdev/hellerui`

or

`yarn add @nickgdev/hellerui`

### Example Usage

```typescript

import React from 'react';
import { Typography } from '@nickgdev/hellerui';
import '@nickgdev/hellerui/index.css'

const { Heading, Paragraph } = Typography;

const MyPage = () => {
    return (
      <section>
         <Heading as="h1" color="violet">Heller UI!</Heading>
         <Paragraph italic>Thats some catch!</Paragraph>
      <section>
    );
};

```

### Heller UI Storybook is open access on Chromatic now!

Are you thinking to yourself? 

*Is this package something __I__ want to install?*

Well now you can fiddle around with our SB instance and see if it fits your use case. 

[hellerui](https://615213bb7c9f60003aa5ec0d-bqyadxoyjo.chromatic.com/?path=/story/container--default)