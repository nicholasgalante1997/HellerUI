import NODEURL from 'url';

export function isValidHttpUrl(s: string) {
  try {
    const o = new URL(s);
    if (o.protocol.includes('http') || o.protocol.includes('https'))
      return true;
  } catch (_e: any) {
    return false;
  }
  return false;
}

export function hasValidFamilyQueryParam(url: string) {
  try {
    const urlObj = NODEURL.parse(url, true);
    if (urlObj.query?.family && urlObj.query.family.length > 0) {
      return true;
    }
    return false;
  } catch (e: any) {
    return false;
  }
}

export function transform(fontUrl: string, familyKey?: string) {
  const parsedUrl = NODEURL.parse(fontUrl, true);
  const family =
    familyKey ??
    (parsedUrl.query?.family as string)?.split(':')?.at(0) ??
    (parsedUrl.query?.family as string);

  if (!family) {
    throw new Error('MISSING FONT FAMILY');
  }

  let rVal = '';
  const SAFE_CHAR_PATTERN = new RegExp(/[\d\w]/);
  for (let x = 0; x < family.length; x++) {
    const marker = family.charAt(x);
    let newCharCode = marker.charCodeAt(0) + 1;
    let char = String.fromCharCode(newCharCode);
    while (!SAFE_CHAR_PATTERN.test(char)) {
      char = String.fromCharCode(newCharCode - 2);
    }
    rVal += char;
  }
  return rVal;
}

/**
 * createLinkElement
 * @param fontUrlStruct {UniqueFontObject | String}
 * @returns element {HtmlLinkElement}
 */
export const createLinkElement = (fontUrlStruct: string, fontKey?: string) => {
  const element = document.createElement('link');
  element.rel = 'stylesheet';
  element.href = fontUrlStruct;
  element.setAttribute('data-fonturlhashed', transform(fontUrlStruct, fontKey));
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
 * @param key String
 * @returns Boolean
 */
export const checkDOMTreeForLinkEl = (url: string, familyKey?: string) => {
  let linkPreviouslyAppended = false;
  const linkEls = document.querySelectorAll(
    `link[data-fonturlhashed=${transform(url, familyKey)}]`
  );
  if (linkEls.length !== 0) {
    linkPreviouslyAppended = true;
  }
  return linkPreviouslyAppended;
};
