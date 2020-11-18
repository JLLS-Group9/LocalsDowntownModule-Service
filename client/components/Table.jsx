import React, {useState} from 'react'
import Review from './Review.jsx'
import style from './style.css'



const Table = (props) => {



    return (
      <div className={style.reviewsContainer} >

        {props.datas.map((data, key) => (<Review data={data} key={key} renderModal={props.renderModal} />))}

      </div>
    )
}
export default Table;