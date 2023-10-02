import React from 'react';
import './WorkCartStyles.css';
import WorkCart from './WorkCart';
import WorkCardData from './WorkCardData';


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            
            {
            WorkCardData.map((val, i)=>{
                // console.log(val);
                return (
                    <WorkCart key={i} source={val.source} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} />
                )

            })
            }
        </div>
    </div>
  )
}

export default Work
