import React from 'react';
import './index.css';
const PodcastTitleandDesc=(props)=>
{
    const{title}=props;
    return(
        <div className="flexBox">
           <ul className="listtype">
           <li><h4>{title}</h4></li>
           <li>Podcast Category</li>
           </ul>
           </div>);
}
export default PodcastTitleandDesc;