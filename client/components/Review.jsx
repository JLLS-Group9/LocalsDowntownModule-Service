import React from 'react';

const Review = ({data}) => (

  <tr>
    <td>{data.username}</td>
    <td>{data.text} </td>

<td>{data.likes}</td>
<td>{data.date}</td>
  </tr>


);

export default Review;