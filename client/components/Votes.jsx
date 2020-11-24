import React from 'react'
import style from './votes.css'
import Votedata from './Votedata.jsx'
const Votes = (props) => (
  <div >
    <div  className={style.staticcontainer}>


      {props.features.map( (feature, key) =>  (<Votedata feature={feature} key={key} />))}

    </div>
  </div>

)

export default Votes;
