import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
    Summer: {
        seasontext: "Let's hit the beach",
        seasonicon: "sun"
    },
    Winter: {
        seasontext: "Burr, it is chilly",
        seasonName: "snowflake"
    }
};

const getSeason = (lat,month) =>{
    console.log("that lat is " + lat + " the months is " + month)
    if (month > 2 && month < 9){
        return lat > 0 ? "Summer" : "Winter"
    } else {
        return lat > 0 ? "Winter" : "Summer"
    }
};

const SeasonDisplay = (props) =>{
    console.log(props)
    const season = getSeason(props.lat,new Date().getMonth());
//    const seasontext = season === "Winter" ? "Burr, it is chilly" : "Let's hit the beach";
//    const seasonicon = season === "Winter" ? "snowflake" : "sun";
    const {seasontext, seasonicon} =  seasonConfig[season]
return (
<div className={`season-display ${season}`}>
<i className={`icon-left massive ${seasonicon} icon`}/>
<h1>{seasontext}</h1>
<i className={`icon-right massive ${seasonicon} icon`}/>
</div>
);  
};

export default SeasonDisplay;