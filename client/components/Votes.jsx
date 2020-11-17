import React from 'react'
import style from './style.css'
import Votedata from './Votedata.jsx'
const Votes = (props) => (
  <div >
    <table  className={style.staticcontainer}>
    <thead >
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      {props.features.map( (feature, key) =>  (<Votedata feature={feature} key={key}/>))}

    </tbody>
  </table>

  </div>

)

export default Votes;
