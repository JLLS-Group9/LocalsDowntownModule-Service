import React from 'react';
import App from './App.jsx'
import style from './style.css'



const Modal = (props) => {

  const closeModal = () => {
    console.log(props.hideModal)
        props.hideModal();
  }

  if (props.modalstate) {
    return (
      <div>
          {/*This is wrapper for the entire modal*/ }
        {/*closeModal changes the state of showGallery from the function in line 9*/ }
        <div className={style.Modal} onClick={()=>(closeModal())} id="myModal">
           {/*This is wrapper for the modal content */ }
          <div className={style.ModalContent} >
          <span><button onClick={()=>(closeModal())} id="myModal">X</button> </span>
          <div className = {style.namereview}>{props.data.user}</div>
          <div className = {style.datereview}>{props.data.date}</div>
          <div className={style.datereview}> Topic: {props.data.topic} </div>
          <div className= {style.textreview}>{props.data.text}</div>
          <div className={style.likesreview}>Likes: {props.data.likes}</div>
          </div>
        </div>
      </div>
    );

  } else {
    {console.log('modal did not open')}
    return null;

  }
}

export default Modal;