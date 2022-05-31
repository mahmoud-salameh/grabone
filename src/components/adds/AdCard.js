/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
import React from 'react';


function AdCarde(props) {

    return (

        <>
        
        
        <div className='card'>
            
            <div className='image_contianer'>
                <img src={`./imgs/${props.ad.image}`} />
                
                <div>
                {props.ad.text}. 
                </div>
            </div>
            <div style={{display: (props.ad.vendor == "Multiple deals")? "none":""}} className='details'>
                <div className='title'> 
                {props.ad.title}.
                </div>
                <div className='vendor'>   
                {props.ad.vendor}.
                </div>
                <div className='location'> 
                {props.ad.location}.
                </div>
                <div className='flex'>
                    <div className='bought'>
                    {( props.ad.bought != "" && props.ad.bought != 0)?`${props.ad.bought} bought`:""} 
                    </div>
                    <div>
                        <div className='from'>from</div>
                        <div>
                            <div className='price'> 
                            {props.ad.price}$
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: (props.ad.vendor == "Multiple deals")? "":"none"}} className='details multiple_details'>
            <div className='title'> 
                {props.ad.title}.
                </div>
                <div className='vendor'>   
                {props.ad.vendor}.
                </div>
            </div>
            <div style={{borderTop:"none", marginRight:"12px",padding:"4px", display: (props.ad.vendor == "Multiple deals")? "":"none"}}  className='details'></div>
            <div style={{borderTop:"none", marginRight:"19px",padding:"4px", display: (props.ad.vendor == "Multiple deals")? "":"none"}}  className='details'></div>
        </div>
        </>
    );
}
 
export default AdCarde;
