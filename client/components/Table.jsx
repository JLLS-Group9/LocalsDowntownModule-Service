import React from 'react'
import Review from './Review.jsx'
import style from './style.css'



const Table = (props) => (

<div className={style.reviews} >

      {props.datas.map((data, key) => (<Review  data={data} key={key} />))}

  </div>

)

export default Table;