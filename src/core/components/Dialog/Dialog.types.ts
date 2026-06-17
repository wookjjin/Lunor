import type { ReactNode } from 'react';

export type DialogSize =
  | 'sm'
  | 'md'
  | 'lg';

export interface DialogProps {
  open: boolean;

  title?: ReactNode;

  children?: ReactNode;

  footer?: ReactNode;

  size?: DialogSize;

  closeOnOverlayClick?: boolean;

  closeOnEscape?: boolean;

  onClose?: () => void;
}