import React from 'react';
import './index.css';
import CardandText from '../../molecules/CardandText';
import PodcastTitleandDesc from '../../molecules/PodcastTitleandDesc';
import Cards from '../../atoms/Cards';
import {useEffect,useState} from 'react';
const DraftOrganism=(props)=>{
    const[showDelete,setshowDelete]=useState(false);
     const{podcast}=props;
   return(<div className="flexBox" onMouseEnter={e=>setshowDelete('true')} onMouseLeave={e=>setshowDelete('false')}>
          <Cards imagelink={podcast.img}/>
          <PodcastTitleandDesc title={podcast.title}/>
          {showDelete&&
          <i class="material-icons micicon" >delete</i>
          }
          
          </div>);
}
          export default DraftOrganism;