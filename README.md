# Heller UI

![Orr](https://d3d00swyhr67nd.cloudfront.net/w944h944/collection/IWM/IWM/IWM_IWM_16784_5-001.jpg)

__A Note From The Maintainer__

![Hi Everybody!](https://c.tenor.com/ny2kroyiSI4AAAAC/hi-everybody-simpsons.gif)

I hope you are having a great night! As i should have mentioned much earlier, this react component library/ui-kit is very much so a work in progress! Moving forward, all versions until *release* will be versioned under 1.0.0. That means that the most up to date version at the time of writing is 0.0.20! If you are on that version, you are killing it!  

If you'd like to leave feedback about the package, please feel free to raise an issue on our github!  

Right now components that are available for consumption are:

* Typography (Heading & Paragraph)
* Button  
* Container
* MediaTitle
* themed-css\*

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

### themed-css

heller ui wants to be the go to choice for spinning up a quick markup/markdown website and not compromising on style. To that extent, we don't want to limit you to using us solely within a react environment. As it stands right now, spinning up a basic cra app from the cli creates a project with some 4000 odd dependencies. Its a lot. Definitely doesn't fit every use case. We've begun creating isolated, opinionated style tokens as css stylesheets available for you to consume within your js project. This is highly experimental right now. 

Ideally its for when you want to leverage hellerui styles/fonts without tying yourself to an individual framework. With the advance of module federation and teams being able to create isolated autonomous microfrontends, we can explore the benefits of other frameworks while keeping consistent styles, which is paramount to good ux. 

Live examples of heller themed-css are quick to follow and will be posted in the readme when available. If youre an eager beaver, just install the package and tinker around yourself with it.  

example  

```jsx
import React from 'react';
import '@nickgdev/lib/index.css';
import '@nickgdev/lib/themes/dark.css'; // sets dark bg at body level w font color
import '@nickgdev/lib/themes/pinched.css'; // sets a layout level padding
import '@nickgdev/lib/themes/font.css'; // makes available classNames used below

const spanStyle = { marginLeft: '8px', fontSize: '8px', color: 'rgba(270,270,270,0.6)' };

const Page = () => (
  <section>
    <h1 className="heading">heller ui dark themed css</h1>
    <p className="paragraph">
      who needs react?
      <span className="paragraph" style={spanStyle}>
        (we all do)
      </span>
    </p>
  </section>
);

export default Page;
```

[view in sb](https://615213bb7c9f60003aa5ec0d-xqgouzigkf.chromatic.com/?path=/docs/themed-css-dark-page--dark-page)


### Heller UI Storybook is open access on Chromatic now!

Are you thinking to yourself? 

*Is this package something __I__ want to install?*

Well now you can fiddle around with our SB instance and see if it fits your use case. 

[hellerui](https://615213bb7c9f60003aa5ec0d-xqgouzigkf.chromatic.com/?path=/story/button--default)