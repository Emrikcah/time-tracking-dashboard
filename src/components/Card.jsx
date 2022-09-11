import React from "react";
//Note to self: ReactComponent doest work unless using create react app. Install vite plugin svgr and add to vite.config.js
import {ReactComponent as Ellipsis} from "../assets/images/icon-ellipsis.svg";
import "./Card.css";

const Card = ({ bgColor, bgImg, title, timeframes, value }) => {
   
   let occurance;

   if (value === 'daily') {
      occurance = 'Yesterday';
   } else if(value === 'weekly') {
      occurance = 'Last Week'
   } else{
      occurance = 'Last Month'
   }

   return (
      <div className="card stats-card" style={{backgroundColor: `${bgColor}` }}>
         <div className="stats-img-container" style={{ backgroundImage: `url(${bgImg})`}}>
            
         </div>
         <div className="stats">
            <div className="stats-info">
               <h2 className="stats-title">{title}</h2>
               <Ellipsis className="stats-ellipsis"/>
            </div>
            <div className="stats-timeframe">
               <p className="current">{timeframes[`${value}`].current} hrs</p>
               <p className="previous">{occurance} - {timeframes[`${value}`].previous} hrs</p>
            </div>
         </div>
      </div>
   );
};

export default Card;

//  previous text onClick yesterday,last week,last month