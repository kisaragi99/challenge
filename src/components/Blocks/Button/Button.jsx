import React from 'react';
import s from './Button.css';

const Button = ({
  disabled, submit, text, onClick,
}) => (
  <button
    type={submit ? 'submit' : 'button'}
    className={s.button}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
