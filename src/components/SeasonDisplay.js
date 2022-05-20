import React from 'react';
import '../Season.css'
function getSeason(latitude,month){
    if(latitude>0){
        return (month > 2 && month <9) ? "Summer" : "Winter";
    }else {
        return (month > 2 && month <9) ? "Winter" : "Summer";
    }
}
function SeasonDisplay (props){
    let Season = getSeason(props.latitude,new Date().getMonth());
    let text = Season ==="Summer" ? "Hey its Summer , Dont go out!": "Hey its Winter, Have fun!";
    let icon = Season ==="Summer" ? "sun" : "snowflake";
    let color = Season ==="Summer" ? "red" : "blue";
    return < div className={`season-display ${color}`}>
    <i className={`massive ${icon} icon`}></i>
    <h1>{text}</h1>
    <i className={`massive ${icon} icon`}></i>
    </div>
}

export default SeasonDisplay;