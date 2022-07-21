# Heller UI

![Orr](https://d3d00swyhr67nd.cloudfront.net/w944h944/collection/IWM/IWM/IWM_IWM_16784_5-001.jpg)

**A Note From The Maintainer**

![Hi Everybody!](https://c.tenor.com/ny2kroyiSI4AAAAC/hi-everybody-simpsons.gif)

LOOK HERE! IM IN CAPS! **THIS IS A PRERELEASE PACKAGE**

##### install stuff 

To get started, run

`npm install @nickgdev/hellerui styled-components react-markdown remark-gfm rehype-raw rehype-sanitize`

or

`yarn add @nickgdev/hellerui styled-components react-markdown remark-gfm rehype-raw rehype-sanitize`

> We've got cooler stuff for you now. It's only getting better.

This is a pre-release library of components. This is what we have to offer you.

##### OmniFont (until a better name reveals itself!)
---

Short Synopsis

> This is a 'use-everywhere' text component. You legit can use it everywhere. We run daily scrapes of the google font api https://fonts.google.com/ where we fetch metadata for the font-families it provides. Then we use a hook (we forked react-font-loader https://www.npmjs.com/package/react-font-loader and made some tweaks, converted it to TS and wrote tests and whatnot) to create and append all the link tags you need to the dom to pull in the families of your choice. We type the list daily so you get autocompletion on all google font families, and we expose the fontBlob in the dist build if you'd like to tweak it/our implementation to your needs. 

**Try it out here!** 

[!storybook instance](https://615213bb7c9f60003aa5ec0d-koqepqgxho.chromatic.com/?path=/docs/typography-varfont--default)

##### HellerPages 
--- 

Short Synopsis

> This is for the people that want to spin up markdown websites in seconds. No joke seconds. You can embed your own components in the body, you can theme it, you can write a ton of markdown in a string and pass it that and then tweak the markdown component implementation to whatever youd like or leave it with our defaults even, which are styles out of the box! We're as proud of this one as the OmniFont guy above it. Its also the reason you have to install so many packages to work w us. We mentioned that last.

**Try it out here**

[!storybook instance](https://615213bb7c9f60003aa5ec0d-koqepqgxho.chromatic.com/?path=/docs/page-renderer-markdown-page--content-as-string)

### Other components we offer!
---

Available for consumption now (also in the linked storybook)

[!storybook instance](https://615213bb7c9f60003aa5ec0d-koqepqgxho.chromatic.com/?path=/docs/button--default)

- Alert 
- Button
- Container
- Loader
- MediaTitle
- Set Typography