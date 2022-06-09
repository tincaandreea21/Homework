import Characters from "../Characters";
import React, { useEffect, useState } from "react";
import "./CreateElement.css";
const CreateElement = (props) => {
  const {
    element: { id, episode, name, air_date: airDate, characters },
  } = props;

  const [showElement, setShowElement] = useState(false);

  function changeState() {
    setShowElement(!showElement);
  }

  return (
    <div key={id} className="list-item row">
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div className="row">
          <div className="col-lg-1 col-md-3 col-sm-12">{episode}</div>
          <div className="col-lg-5 col-md-3 col-sm-12">{name}</div>
          <div className="col-lg-3 col-md-3 col-sm-12">{airDate}</div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <button className="btn btn-block btn-primary" onClick={changeState}>
              View {characters.length} Characters
            </button>
          </div>
        </div>
      </div>
      <div id="div-characters" className="col-lg-6 col-md-6 col-sm-6">
        <div>{showElement && <Characters characters={[characters]} />}</div>
      </div>
    </div>
  );
};

export default CreateElement;
