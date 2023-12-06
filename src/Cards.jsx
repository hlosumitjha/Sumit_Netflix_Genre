import React from "react";
import './index.css'

function Cards(props) {
  return (
    <>
      <div className="basic_struc">
        <img src={props.S_img} alt="" />
        <h3>{props.S_rank}</h3>
        <div>
          <p>{props.S_title}</p>
          <h2>{props.S_name}</h2>
          <a target="_blank" href={props.S_link}>
            <button>Watch Now</button>
          </a>
        </div>
      </div>
      <br/>
    </>
  );
};

export default Cards;
