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
<div className={style.overreview} style={{backgroundColor: data.color}} onClick={()=>(renderModal(data))}>
  <div className={style.flexcolumn}>
  <div className = {style.namereview}><svg width="24px" height="24px" className={style.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M11.598 10.564a4.485 4.485 0 1 0 8.97 0 4.485 4.485 0 0 0-8.97 0zm-2.66 0a7.145 7.145 0 1 1 14.29 0 7.145 7.145 0 0 1-14.29 0zm7.146 7.145c-4.021 0-7.318 3.238-7.318 6.938v.609h14.635v-.609c0-3.7-3.297-6.938-7.317-6.938zm0-2.66c5.424 0 9.977 4.365 9.977 9.598v3.269H6.106v-3.269c0-5.234 4.552-9.598 9.978-9.598z" fill="#869099"></path></svg>{data.user}</div>
  <div className={style.row}>
  <div className={style.datereview}> {data.resident} ᐧ  </div>
  <div className = {style.datereview}>{data.date} </div>
 </div>
  </div>
  <div className= {style.textreview}>{data.text}</div>
  <div className={style.flexrow}>
  <div  className={style.likesreview} ><svg className={style.smile} width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path
   d="M15.96 29.26c-7.345 0-13.3-5.955-13.3-13.3 0-7.345 5.955-13.3 13.3-13.3 7.345 0 13.3 5.955 13.3 13.3 0 7.345-5.955 13.3-13.3 13.3zm0-2.66c5.876 0 10.64-4.764 10.64-10.64S21.836 5.32 15.96 5.32 5.32 10.084 5.32 15.96 10.084 26.6 15.96 26.6zM12.048 9.602a1.995 1.995 0 1 1 0 3.99 1.995 1.995 0 0 1 0-3.99zm7.824 0a1.995 1.995 0 1 1 0 3.99 1.995 1.995 0 0 1 0-3.99zm-11.23 7.174a1.33 1.33 0 0 1 2.66 0 4.658 4.658 0 1 0 9.316 0 1.33 1.33 0 0 1 2.66 0 7.318 7.318 0 0 1-14.636 0z" fill="white"></path></svg> </div>
  <div className={style.likesreview}>{data.likes}</div>
  <div className={style.flag}>
    Flag
  </div>
  </div>
</div>
</div>

);

export default Review;



