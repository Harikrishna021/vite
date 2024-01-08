import type { CheckboxChangeEvent } from 'antd/es/checkbox';
export interface CheckProps{
  selected:boolean;
  value:string;
  onChange: (e: CheckboxChangeEvent) =>void;
}