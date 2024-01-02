import  { FC } from 'react';
import ButtonProps from './Button.interface';
import button from './Button.module.scss';
const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={button.button}>
      {label}
    </button>
  );
};

export default Button;
