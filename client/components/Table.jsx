import React, {useState} from 'react'
import Review from './Review.jsx'
import style from './style.css'



const Table = (props) => {



    return (
      <div>
      <button className={style.slideLeft} onClick = {() => {
      document.getElementById('container').scrollLeft -= 400}} >Go left</button>
      <button className={style.slideRight} onClick = {() => {
      document.getElementById('container').scrollLeft += 400}} >Go Right</button>
     <div className={style.Slider} id='container' >



        {props.datas.map((data, key) => (<Review data={data} key={key} renderModal={props.renderModal} />))}

      </div>
      </div>
    )
}
export default Table;