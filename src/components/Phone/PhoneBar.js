import React from 'react';

import "../../App.css"


function PhoneBar(props) {
    const itemsMap = props.items.map((x,i) => {
            return (
                <li key={i}>
                    <p onClick={() => show(x.text)}>
                        <div><i className={x.icon}></i></div>
                        <div>{x.text}</div>
                    </p>
                </li> 
            );
        
    });
    const show=(x) =>{
        var arr = document.getElementsByClassName("over_slide");
        document.getElementById("body").style.overflow = "hidden";
        for (let index = 0; index < arr.length; index++) {
            arr[index].style.display = "none";
        }
        
        document.getElementById(x).style.display = "block";
    };

    return (
        <>
        
        <div>
            <div className='phone_bar'>
                <ul>
                    {itemsMap}
                </ul>
            </div>
        </div>
        </>
    );
}

export default PhoneBar;