import style from "./Card.module.scss";
import {CardProps} from "./Card.interface";
import  { FC } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const card:FC<CardProps>=(props)=>{
  return(
    <Card
    hoverable
    className={style.CardContainer}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={props.title} description={props.info} />
  </Card>
);
};
export default card;