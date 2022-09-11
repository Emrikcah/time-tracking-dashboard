import { useState } from "react";
import { data } from "./data/data.js";
import jeremy from "./assets/images/image-jeremy.png";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
   const [value, setValue] = useState("daily");

   return (
      <main className="container">
         {/* profile card */}
         <div className="card">
            <div className=" card profile-card-top">
               <img className="profile-img" src={jeremy} alt="male smiling" />
               <h1 className="profile-card-title">
                  <p className="report">Report for</p>Jeremy <span className="blockMe">Robson</span>
               </h1>
            </div>
            {/* button group */}
            <div className="profile-card-btn">
               {["daily", "weekly", "monthly"].map((item, i) => (
                  <button key={i} onClick={() => setValue(`${item}`)} className={`profile-btn ${item === value && "active"}`}>
                     {item}
                  </button>
               ))}
            </div>
            {/* button group end */}
         </div>
         {/* profile card end */}

         {/* card container */}
         <div className="card-container">
            {data.map((item, i) => {
               return <Card key={i} {...item} value={value} />;
            })}
         </div>
         {/* card container end */}
      </main>
   );
}

export default App;
