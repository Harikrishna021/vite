import React from 'react';
import Button from '../src/Components/Atoms/Button/Button';
import ButtonProps from '../src/Components/Atoms/Button/Button.interface';

const App: React.FC = () => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked!');
    event.preventDefault();
  };

  const buttonProps: ButtonProps = {
    label: 'Click me',
    onClick: handleButtonClick,
  };

  return (
    <div>
      <h1>Hello React TypeScript!</h1>
      <Button {...buttonProps} />
    </div>
  );
};

export default App;
