import React from 'react';
import Cards from '../../atoms/Cards';
import './index.css';
import PodcastText from '../../atoms/PodcastText';
import {Link} from 'react-router-dom';
const CardandText=(props)=>
{
    const{Playlist,PlaylistName}=props;
    return(
        <>
           {
        
        
        Playlist[PlaylistName].map((key, index)=>{
             {return(<div><Cards imagelink={key.img}/><Link to={`/Playerpage/${key.id}/${key.title}`}><PodcastText text={key.title}/></Link></div>)}
            })
        
    }
           </>
    );
}
export default CardandText;