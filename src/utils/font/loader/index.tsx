import { useEffect, useState } from 'react';
import { useFontContext, FontContext } from './context';
import {
  checkDOMTreeForLinkEl,
  createLinkElement,
  destroyLinkElement
} from './utils';

/**
 * MAIN EXPORT
 */

/**
 * mounts a link element to the dom on hook execution from within
 * the react component tree
 * @param fontObj
 * @returns StateObject
 */
const useExtraneousFont = (fontObj: string) => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!checkDOMTreeForLinkEl(fontObj)) {
      try {
        const e = createLinkElement(fontObj);
        document.head.appendChild(e);
        setLoading(false);
        setReady(true);
        return () => {
          destroyLinkElement(e);
        };
      } catch (err: any) {
        setLoading(false);
        setFailed(true);
        console.error('[useExtraneousFont]:::' + (err as Error).message);
      }
    } else {
      setLoading(false);
      setReady(true);
    }
  }, []);
  return { ready, failed, loading };
};

export { useExtraneousFont };
