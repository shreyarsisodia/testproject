import './index.css';
import React,{useState,useEffect} from "react";
import Axios from "axios";
import CommonNavbar from '../../organisms/CommonNavbar';
import ChannelNameBox from '../../organisms/ChannelNameBox';
import DraftOrganism from '../../organisms/DraftOrganism';
const MyDrafts=({history})=>
{
const[ChannelName,setChannelName]=useState([]);

  useEffect(()=>{
  getPodcasts();
  },[]);
  const getPodcasts=async()=>
  {
  const res=await Axios.get('http://localhost:3000/MyDrafts');
 setChannelName(res.data);
  };
    return(<div>
            <CommonNavbar/>
           <div className="container">
            <ChannelNameBox/>
            <h1>MyDrafts</h1>
           <ul className="DraftList">
           {ChannelName.map(podcast=>
          {
           return(<ul className="DraftList"><li><DraftOrganism podcast={podcast}/></li></ul>);
           })}
           </ul>
        </div>
          </div>);
}
export default MyDrafts;