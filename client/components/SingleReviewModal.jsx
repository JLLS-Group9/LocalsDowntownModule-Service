import React from 'react';
import App from './App.jsx'
import style from './style.css'
import Review from './Review.jsx'
import SingleReview from './SingleReview.jsx'

const SingleReviewModal = (props) => {

  const closeModal = () => {

        props.hideModal();
  }

  if (props.modalstate) {
    return (
      <div>

        <div className={style.Modal} onClick={()=>(closeModal())} id="myModal">

          <div className={style.SingleReviewModalContent} >
          <span><button onClick={()=>(closeModal())} id="myModal">X</button> </span>
            <div className={style.SingleReview}><SingleReview data={props.data}  /> </div>
          </div>
        </div>
      </div>
    );

  } else {

    return null;

  }
}

export default SingleReviewModal;