import React from "react";
import styled from "styled-components";
import "./Pin.css";

import IconButton from "@material-ui/core/IconButton";

import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


function Pin(props) {
  const { pin } = props
  let { urls, id } = pin;
  let {
    download,
    setClicked,
    clicked,
    hover,
    setHover
  } = props;

  return (
    <div className="pin">
      <div className="pin__container"
        onMouseEnter={e => setHover(id)}
        onMouseLeave={e => setHover(null)}
      >
        <img onClick={() => setClicked(pin.id)} src={urls?.thumb} alt="pin" />
        {hover === id && (
          <IconButtonView>
            <IconButton title="Download" onClick={() => download(urls?.full)} >
              <CloudDownloadIcon className="pin__icon" />
            </IconButton>
          </IconButtonView>
        )}

      </div>

      {clicked === id && (
        <Lightbox
          mainSrc={urls?.regular}
          onCloseRequest={() => setClicked(null)}
        />
      )}

    </div>
  );
}

export default Pin;


const IconButtonView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: rgb(17, 17, 17,0.2);
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

