import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./Cards.jsx";
import Sdata from "./Sdata.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="parent">
      <h1 className="heading">Top 9 Sumit's Favourite Netflix Originals</h1>
      <div className="box_container">
        <div className="card">
          <Cards
            S_name={Sdata[0].S_name}
            S_rank={Sdata[0].S_rank}
            S_title={Sdata[0].S_title}
            S_img={Sdata[0].S_img}
            S_link={Sdata[0].S_link}
          />
        </div>
        <div className="card">
          <Cards
            S_name={Sdata[1].S_name}
            S_rank={Sdata[1].S_rank}
            S_title={Sdata[1].S_title}
            S_img={Sdata[1].S_img}
            S_link={Sdata[1].S_link}
          />
        </div>
        <div className="card">
          <Cards
            S_name={Sdata[2].S_name}
            S_rank={Sdata[2].S_rank}
            S_title={Sdata[2].S_title}
            S_img={Sdata[2].S_img}
            S_link={Sdata[2].S_link}
          />
        </div>
        <div className="card">
          <Cards
            S_name={Sdata[3].S_name}
            S_rank={Sdata[3].S_rank}
            S_title={Sdata[3].S_title}
            S_img={Sdata[3].S_img}
            S_link={Sdata[3].S_link}
          />
        </div>
        <div className="card">
          <Cards
            S_name={Sdata[4].S_name}
            S_rank={Sdata[4].S_rank}
            S_title={Sdata[4].S_title}
            S_img={Sdata[4].S_img}
            S_link={Sdata[4].S_link}
          />
        </div>
        <div className="card">
          <Cards
            S_name={Sdata[5].S_name}
            S_rank={Sdata[5].S_rank}
            S_title={Sdata[5].S_title}
            S_img={Sdata[5].S_img}
            S_link={Sdata[5].S_link}
          />
        </div>
        <div className="card">
          <Cards
            S_name={Sdata[6].S_name}
            S_rank={Sdata[6].S_rank}
            S_title={Sdata[6].S_title}
            S_img={Sdata[6].S_img}
            S_link={Sdata[6].S_link}
          />
        </div>
        <div className="card">
          <Cards
            S_name={Sdata[7].S_name}
            S_rank={Sdata[7].S_rank}
            S_title={Sdata[7].S_title}
            S_img={Sdata[7].S_img}
            S_link={Sdata[7].S_link}
          />
        </div>
        <div className="card">
          <Cards
            S_name={Sdata[8].S_name}
            S_rank={Sdata[8].S_rank}
            S_title={Sdata[8].S_title}
            S_img={Sdata[8].S_img}
            S_link={Sdata[8].S_link}
          />
        </div>
      </div>
    </div>
  </>
);
