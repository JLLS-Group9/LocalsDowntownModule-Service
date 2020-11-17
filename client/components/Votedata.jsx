import React from 'react'
import style from './style.css'

const Votedata = ({feature}) => (

     <tr className={style.list}>

<td>   <img className={style.thumb} src={"../../pictures/thumbs_up.png"} alt="thumbs" />{feature.like1}% </td>
        <td>{feature.Topic1}</td>

        <td>   <img className={style.thumb} src={"../../pictures/thumbs_up.png"} alt="thumbs" />{feature.like2}% </td>
        <td>{feature.Topic2}</td>

        <td>   <img className={style.thumb} src={"../../pictures/thumbs_up.png"} alt="thumbs" />{feature.like3}%</td>
        <td>{feature.Topic3}</td>
        </tr>

)

export default Votedata