import React from 'react'
import style from './style.css'

const Votedata = ({ feature }) => (

        <tr className={style.list}>

                <td className={style.votepercentage}> <svg className={style.svg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d={feature.pathlike1}></path></svg> {feature.like1}% </td>
                <td className={style.votetext} ><svg className={style.svg}viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px"><path d={feature.Topic1path} ></path></svg>{feature.Topic1}</td>

                <td className={style.votepercentage}>   <svg className={style.svg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d={feature.pathlike1}></path></svg>{feature.like2}% </td>
                <td className={style.votetext}><svg height="40" width="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" ><path d={feature.Topic2path} ></path></svg>{feature.Topic2}</td>

                <td className={style.votepercentage}>   <svg className={style.svg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d={feature.pathlike1}></path></svg>{feature.like3}%</td>
                <td className={style.votetext}><svg  height="50" width="50"viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d={feature.Topic3path} ></path></svg>{feature.Topic3}</td>
        </tr>

)

export default Votedata