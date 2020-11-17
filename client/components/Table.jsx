import React from 'react'
import Review from './Review.jsx'
import style from './style.css'



const Table = (props) => (


<div className={style.reviewsContainer} >
<span className={style.backarrow}> back </span>
      {props.datas.map((data, key) => (<Review  data={data} key={key} renderModal={props.renderModal} />))}
      <span className={style.nextarrow}> next </span>
  </div>

)

export default Table;