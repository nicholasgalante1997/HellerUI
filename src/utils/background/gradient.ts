/* eslint-disable import/prefer-default-export */
import { Gradient } from 'src/@types';

export function formatGradient(gradient: Gradient) {
  // radial-gradient
  if (gradient.covenant?.overrideAndDangerouslySetGradient) {
    return { background: gradient.covenant.overrideAndDangerouslySetGradient };
  }

  const { flow, from, to } = gradient;
  const prefix = 'linear-gradient';
  const body = `(${flow!}, ${from}, ${to})`;
  return { background: prefix + body };
}
