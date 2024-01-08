import { FC, useState } from 'react';
import { Checkbox } from 'antd';
import { CheckProps } from './Check.interface';
import style from './Check.module.scss';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

export const CheckboxItem: FC<CheckProps> = (props) => {
  const [isChecked, setIsChecked] = useState(!!props.selected);

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <Checkbox
      checked={isChecked}
      onChange={handleCheckboxChange}
      className={style.filter}
    >
      {props.value}
    </Checkbox>
  );
};
