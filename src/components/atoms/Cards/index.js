import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
const Cards=(props)=>
{
    const{imagelink}=props;
return(
<>
      <Card style={{width: '180px',height:'180px',borderRadius:'20px' }}>
  <Card.Img className="imgheight" src={imagelink} />
</Card>
</>
);
}
export default Cards;