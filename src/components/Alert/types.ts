import { WithCustomStyles } from '../../@types';

export interface NativeAlertProps {
  className?: string;
  id?: string;
  variant?: 'info' | 'warning' | 'error' | 'success'; //string union type
  title: string;
  isVisible: boolean;
  onClose: () => void;
}

export type AlertProps = WithCustomStyles<NativeAlertProps>;
