import React from 'react';
import { createPortal } from 'react-dom';
import { iModal } from '../../constants/types/index';

function Modal(props: iModal): JSX.Element {
  const { children } = props;
  const el = document.getElementById('modal-root');
  return (
    createPortal(<div className="Global__modal-wrapper">{children}</div>, el)
  )
}

export default Modal;
