import React from 'react'
import style from './votes.css'

const Votedata = ({ feature }) => (

        <div className={style.voterow}>

                <div className={style.votepercentage}>
                <div className={style.innervote}>
                <svg className={style.svg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  height={feature.Topic1size} width={feature.Topic1size}>
                        <path d={feature.pathlike1} fill={feature.pathlike1fill} fill-rule='evenodd'></path>
                </svg> {feature.like1}%
                </div>
                </div>


                <div className={style.votetext} >
                <svg className={style.voterow3} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height={feature.Topic1size} width={feature.Topic1size} ><path d={feature.Topic1path} fill={feature.Topic1fill}  fill-rule='evenodd'></path></svg>
                <div className={style.innervote}>{feature.Topic1}</div>
                </div>


                <div className={style.votepercentage}>
                <div className={style.innervote}>
                <svg className={style.svg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  height={feature.Topic1size} width={feature.Topic1size}>
                        <path d={feature.pathlike1} fill={feature.pathlike1fill}  fill-rule='evenodd'></path>
                        </svg>{feature.like2}%
                        </div>
                        </div>


                <div className={style.votetext}>
                <svg className={style.voterow3}  height={feature.Topic2size} width={feature.Topic2size}  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" ><path d={feature.Topic2path} fill={feature.Topic2fill}  fill-rule='evenodd'></path></svg>
                <div className={style.innervote}>{feature.Topic2}</div>
                </div>

                <div className={style.votepercentage}>
                <div className={style.innervote}>
                <svg className={style.svg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  height={feature.Topic1size} width={feature.Topic1size}>
                        <path d={feature.pathlike1} fill={feature.pathlike1fill}  fill-rule='evenodd'></path>
                        </svg>{feature.like3}%
                        </div>
                        </div>

                <div className={style.votetext}>
                <svg className={style.voterow3}  height={feature.Topic3size} width={feature.Topic3size}  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d={feature.Topic3path} fill={feature.Topic3fill}  fill-rule='evenodd' ></path></svg>
                <div className={style.innervote}>{feature.Topic3}</div>
                </div>
        </div>

)

export default Votedata