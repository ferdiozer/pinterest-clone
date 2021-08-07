import React, { useState } from "react";
import Pin from "./Pin";
import "./Mainboard.css";



function Mainboard(props) {

  const [state, setState] = useState({ clickedImageId: null, hoverImageId: null });

  let { pins } = props;

  const download = (url, title) => {
    console.log("download:", url);
    fetch(url, {
      method: "GET",
      headers: {}
    }).then(response => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", title ? title : `piimage-${Date.now()}.jpg`); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="mainboard">
      <div className="mainboard__container">
        {pins.map((pin, i) => {
          return <Pin
            key={i}
            download={download}
            pin={pin}
            clicked={state.clickedImageId}
            setClicked={(id) => setState({ ...state, clickedImageId: id })}
            hover={state.hoverImageId}
            setHover={(id) => setState({ ...state, hoverImageId: id })}
          />;
        })}
      </div>
    </div>
  );
}

export default Mainboard;
