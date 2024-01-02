import { MouseEvent } from 'react';

interface ButtonProps {
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default ButtonProps;
