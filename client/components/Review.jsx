import React, {useState} from 'react';
import style from './style.css'


const colours = [
  '#00adbb', '#fa8c68', '#ceb6ff',
  '#740631', '#f2c430', '#052286', '#ff5e3f'
];
const getColour = () => colours[Math.floor(Math.random() * colours.length)];


const Review = ({data, renderModal}) => (



<div className={style.bodyreview} id="slider">
<div className={style.headreview}>
</div>
<div className={style.overreview} style={{backgroundColor: getColour()}} onClick={()=>(renderModal(data))}>
  <div className = {style.namereview}>{data.user}</div>
  <div className = {style.datereview}>{data.date}</div>
  <div className={style.datereview}> Topic: {data.topic} </div>
  <div className= {style.textreview}>{data.text}</div>
  <div className={style.likesreview}>Likes: {data.likes}</div>
</div>
</div>

);

export default Review;



