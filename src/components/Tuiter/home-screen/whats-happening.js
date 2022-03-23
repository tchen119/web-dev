import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "../index.css";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
     dispatch({type: 'create-tuit',
       tuit: whatsHappening
     });
  }
  return (
    <>
      <textarea className="wd-width-100" placeHolder="What's happening?" value={whatsHappening}
               onChange={(event) =>
        setWhatsHappening(event.target.value)}>

      </textarea>
      <a className="btn btn-primary btn-block rounded-pill" onClick={tuitClickHandler}>
        Tuit
      </a>
    </>
  );
}
export default WhatsHappening;