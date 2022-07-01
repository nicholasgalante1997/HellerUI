import { fontMap } from 'src/globals/fonts';
import url from 'url';

export function transform(s: string) {
  const parsedUrl = url.parse(s, true);
  const family = (parsedUrl.query.family as string).split(':').at(0);
  
  if (!family) { throw new Error('MISSING FONT FAMILY') }

  let rVal = '';
  for (let x = 0; x < family.length; x++) {
    const marker = family.charAt(x);
    let newCharCode = (marker.charCodeAt(0) - 2);
    const char = String.fromCharCode(newCharCode);
    rVal += char;
  }
  return rVal;
}

/**
 * createLinkElement
 * @param fontUrlStruct {UniqueFontObject | String}
 * @returns element {HtmlLinkElement}
 */
export const createLinkElement = (fontUrlStruct: string) => {
  const element = document.createElement('link');
  element.rel = 'stylesheet';
  element.href = fontUrlStruct;
  element.setAttribute('data-fonturlhashed', transform(fontUrlStruct));
  return element;
};

/**
 * Removes an HtmlElement from the DOM, used in useEffect cleanup
 * @param element {HtmlElement}
 */
export const destroyLinkElement = (element: HTMLElement) => {
  element.remove();
};

/**
 * Checks the DOM for an existing link el with the corresponding href
 * @param fontUrlStruct String
 * @returns Boolean
 */
export const checkDOMTreeForLinkEl = (fontUrlStruct: string) => {
  let linkPreviouslyAppended = false;
  const linkEls = document.querySelectorAll(
    `link[data-fonturlhashed=${transform(fontUrlStruct)}]`
  );
  if (linkEls.length !== 0) {
    linkPreviouslyAppended = true;
  }
  return linkPreviouslyAppended;
};
