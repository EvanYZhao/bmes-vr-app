import React from "react";

export default function Metrics({ flexion_score, extension_score }) {
   return (
      <div className="metrics">
         <div className="row-flex">
         <div className="metric-card">
         Flexion 
         <br/> 
         <div className="metric-score">
         {flexion_score}%
         </div>
         </div>
         <div className="metric-card">
            Extension
         <br/> 
         <div className="metric-score">
         {extension_score}%
         </div>
         </div>
         <div className="metric-card">
         Total
         <br/> 
         <div className="metric-score">
         {(flexion_score + extension_score) / 2}%         
         </div>
         </div>
         </div>
      </div>
   );
}
