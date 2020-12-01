import React, {useState} from 'react'
import Review from './Review.jsx'
import style from './style.css'




//for cleaner code do not write logic inside onclick event handler
const ReviewListContainer = (props) => {


    return (
      <div >

     <div className={style.Slider} id='container' >

        {props.datas.map((data, key) => (<Review data={data} key={key} renderModal={props.renderModal} />))}

      </div>
      <button className={style.slideLeft} id="slideLeft" onClick = {() => {
      document.getElementById('container').scrollLeft -= 960;
      document.getElementById('slideAll').style.display = "none";document.getElementById('slideLeft').style.display = "none";}} > {"<"} </button>
      <button className={style.slideRight} onClick = {() => {

      document.getElementById('container').scrollLeft += 960;
      document.getElementById('slideLeft').style.display = "inline-block";
      document.getElementById('slideAll').style.display = "inline-block";

      }} >  {">"} </button>
       <button className={style.slideAll} id="slideAll"  onClick = {() => {

      props.renderAllReviews();
      }} >+25</button>
      </div>
    )
}
export default ReviewListContainer;