import { useEffect, useState } from 'react';
import { GoogleFontObject } from 'src/@types/linkrel';

const createLinkElement = (fontObj: GoogleFontObject) => {
  const element = document.createElement('link');
  element.rel = 'stylesheet';
  element.href = fontObj.fontUrl;
  element.id = fontObj.key;
  return element;
};

const destroyLinkElement = (element: HTMLElement) => {
  document.head.removeChild(element);
};

const checkDOMTreeForLinkEl = (fontObj: GoogleFontObject) => {
  const elOrUndefined = document.querySelector('#' + fontObj.key);
  if (elOrUndefined) return true;
  return false;
};

const useExtraneousFont = (fontObj: GoogleFontObject) => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!checkDOMTreeForLinkEl) {
      const e = createLinkElement(fontObj);
      document.head.appendChild(e);
      return () => {
        destroyLinkElement(e);
      };
    } else {

    }
  }, []);
  return { ready, failed };
};

export { useExtraneousFont };
