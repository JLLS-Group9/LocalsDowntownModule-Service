import React from 'react'
import style from './style.css'

const Votedata = ({ feature }) => (

        <tr className={style.list}>

                <td className={style.votepercentage}>   <img className={style.thumb} src={"../../pictures/thumbs_up.png"} alt="thumbs" />{feature.like1}% </td>
                <td className={style.votetext} >{feature.Topic1}</td>

                <td className={style.votepercentage}>   <img className={style.thumb} src={"../../pictures/thumbs_up.png"} alt="thumbs" />{feature.like2}% </td>
                <td className={style.votetext}>{feature.Topic2}</td>

                <td className={style.votepercentage}>   <img className={style.thumb} src={"../../pictures/thumbs_up.png"} alt="thumbs" />{feature.like3}%</td>
                <td className={style.votetext}>{feature.Topic3}</td>
        </tr>

)

export default Votedata