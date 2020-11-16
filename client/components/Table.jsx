import React from 'react'
import Review from './Review.jsx'
import style from './style.css'



const Table = (props) => (
<div className={style.reviews} >
    {/* <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Text</th>
          <th>Likes</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody> */}
      {props.datas.map((data, key) => (<Review  data={data} key={key} />))}
      {/* </tbody>
    </table> */}
  </div>
)

export default Table;