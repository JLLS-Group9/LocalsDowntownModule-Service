import React from 'react';
import App from './App.jsx'
import style from './style.css'
import Review from './Review.jsx'


const SingleReviewModal = (props) => {

  const closeModal = () => {
    console.log(props.hideModal)
        props.hideModal();
  }

  if (props.modalstate) {
    return (
      <div>

        <div className={style.Modal} onClick={()=>(closeModal())} id="myModal">

          <div className={style.SingleReviewModalContent} >
          <span><button onClick={()=>(closeModal())} id="myModal">X</button> </span>
            <div className={style.SingleReview}><Review data={props.data} /> </div>
          </div>
        </div>
      </div>
    );

  } else {
    {console.log('modal did not open')}
    return null;

  }
}

export default SingleReviewModal;