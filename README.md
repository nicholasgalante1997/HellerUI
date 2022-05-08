# Heller UI

![Orr](https://d3d00swyhr67nd.cloudfront.net/w944h944/collection/IWM/IWM/IWM_IWM_16784_5-001.jpg)

**A Note From The Maintainer**

![Hi Everybody!](https://c.tenor.com/ny2kroyiSI4AAAAC/hi-everybody-simpsons.gif)

I hope you are having a great night! As i should have mentioned much earlier, this react component library/ui-kit is very much so a work in progress! Moving forward, all versions until _release_ will be versioned under 1.0.0. That means that the most up to date version at the time of writing is 0.0.25! If you are on that version, you are killing it!

If you'd like to leave feedback about the package, please feel free to raise an issue on our github!

Right now components that are available for consumption are:

- Typography (Heading & Paragraph)
- Button
- Container
- MediaTitle
- Page
- Markdown Page
- themed-css\*

##### Installation

> heller ui relies on styled-components for runtime style injection as well as react-markdown, and several markdown plugins to create the markdown renderer page component. In totality, the installation of the below packages results in an addition of less than 2 mb to your package. If size is everything to you, and motion means nothing, then we have current works in development to allow for the consumption of this package as a remotely hosted collection of federated modules. Stay tuned for updated on how to use hellerui with module federation.


To get started, run

```npx
npm install @nickgdev/hellerui styled-components react-markdown remark-gfm rehype-raw rehype-sanitize
```

or

```yarn
yarn add @nickgdev/hellerui styled-components react-markdown remark-gfm rehype-raw rehype-sanitize
```

---
##### Example Usage

```typescript

import React from 'react';
import { Typography } from '@nickgdev/hellerui';
import '@nickgdev/hellerui/lib/index.css'

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

---
##### heller as a templated page engine

This is lo and behold the best thing that heller offers (my opinion). We've wanted to create a component that could allow for the rapid development of content driven websites,
like docs sites or blog sites. We offer to you, the Heller Page. Right now it has two implementations, one that accepts text/jsx as content, and one that accepts markdown as content. I could tell you why the pages are awesome, but its better to show you! 

> Below is an image of a Heller Page being used as a markdown engine, and we've also included the code so you can see just how easy it is to use/implement

![Heller Markdown Page](/lib/assets/md-page.png)
![Heller Markdown Page](/src/assets/md-page.png)
![Heller Markdown Page](/assets/md-page.png)

![Heller Markdown Page](/lib/assets/md-page-code.png)
![Heller Markdown Page](/src/assets/md-page-code.png)
![Heller Markdown Page](/assets/md-page-code.png)

---

### Heller UI Storybook is open access on Chromatic now!

Are you thinking to yourself?

_Is this package something **I** want to install?_

Well now you can fiddle around with our SB instance and see if it fits your use case.

[hellerui](https://615213bb7c9f60003aa5ec0d-kzmwhjocta.chromatic.com/?path=/story/button--default)
