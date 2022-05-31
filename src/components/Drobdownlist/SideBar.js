/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react';

import "../../App.css"


function SideBar(props) {
    const itemsMap = props.items.map((x, i) => {
        if(x.num){
            return ( 
                <li key={i}>
                    <a href='#'>
                        <span>{x.name}</span>
                        <span>{(x.num == 0)?"":x.num}</span>
                    </a>
                </li>);
        } 
        else{
            return (
                <li key={i}>
                    <a href='#'>
                        <span>{x.name}</span>
                        <span><i className={x.icon} ></i></span>
                    </a>
                </li>);
        }
    });

    return (
        <div className='sid_bar'>
            <div className='title'>
                {props.title}
            </div>
            <ul>
                {itemsMap}
            </ul>
        </div>
    );
}

export default SideBar;