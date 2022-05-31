/* eslint-disable eqeqeq */
import React from 'react';
import ads from '../../Data/data';
import AdCard from './AdCard';

import 'bootstrap/dist/css/bootstrap.min.css';

function AdList(props) {
  const adsShow = ads[props.title].map((x, i) => {
      return (<AdCard type={(props.title == "Collections")?"Collections":""} key={i} ad={x} />);
    });
  
 
  return ( 
    <>

    <div style={{display: (adsShow == "")?"none":""}} className='container'>
      <div className='ads_list_header'>
        {props.title} <button>View More {`>`}</button>
      </div>
      <div className='ads_row'>
        {adsShow}
      </div>
    </div>
    </>
  );
  
} 

export default AdList;

