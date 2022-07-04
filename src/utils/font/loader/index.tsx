import { useEffect, useState } from 'react';
import { useFontContext, FontContext } from './context';
import {
  checkDOMTreeForLinkEl,
  createLinkElement,
  destroyLinkElement,
  isValidHttpUrl
} from './utils';

/**
 * @summary 
 * @param fontUrl the href of the font file/css file you wish to load into your application
 * @param fontKey a unique identifier for the link you are appending to the dom,
 * 
 * @returns StateObject
 */
const useExtraneousFont = (fontUrl: string, fontKey?: string) => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  console.log('invoking extraneous font w ' + JSON.stringify({ fontUrl, fontKey }))

  useEffect(() => {
    /**
     * Begin Operations
     */
    setLoading(true);
    console.log(new URL(fontUrl).protocol === 'https:')
    console.log('isValidHttpUrl:::' + isValidHttpUrl(fontUrl));
    /**
     * Validate fontUrl supplied by consumer
     */
    if (!isValidHttpUrl(fontUrl)) {
      setFailed(true);
      setError('INVALID URL FORMAT SUPPLIED');
      setLoading(false);
      return;
    }

   

    /**
     * Validate url contains query param `family=...:scale`
     * or that a familyKey is supplied
     * if not, return an error
     */
    if (!fontUrl.includes('family=') && !fontKey) {
      setFailed(true);
      setError('font identifier was not supplied, and could not be discerned from the url schema. Aborting operation.');
      setLoading(false);
      return;
    }

    /**
     * if the link does NOT already exist in <head>
     * 1. create a HtmlLinkElement
     * 2. 
     */
    if (!checkDOMTreeForLinkEl(fontUrl, fontKey)) {
      try {
        const e = createLinkElement(fontUrl, fontKey);
        document.head.appendChild(e);
        setLoading(false);
        setReady(true);
        return () => {
          destroyLinkElement(e);
        };
      } catch (err: any) {
        setLoading(false);
        setFailed(true);
        setError('[useExtraneousFont]:::' + (err as Error).message);
      }
    } else {
      setLoading(false);
      setReady(true);
    }
  }, [fontKey, fontUrl]);
  return { ready, failed, loading, error };
};

export { useExtraneousFont };
