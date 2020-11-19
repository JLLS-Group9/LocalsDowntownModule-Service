import React from 'react';
import App from './App.jsx'
import style from './style.css'
import ReviewListContainer from './ReviewListContainer.jsx'
import Review from './Review.jsx'
import Navbar from './Navbar.jsx'

const AllReviewModal = (props) => {

  const closeModal = () => {
    console.log(props.hideModal)
        props.hideModal();
  }

  if (props.AllReviewsmodalstate) {
    return (
      <div>

        <div className={style.Modal} onClick={()=>(closeModal())} id="myModal">

          <div className={style.ModalContent} >
          <span><button onClick={()=>(closeModal())} id="myModal">X</button> </span>
          <Navbar topics={props.topics} changeTopic={props.changeTopic}/>
          {props.datas.map((data, key) => (<Review data={data} key={key} />))}
          </div>
        </div>
      </div>
    );

  } else {

    return null;

  }
}

export default AllReviewModal;