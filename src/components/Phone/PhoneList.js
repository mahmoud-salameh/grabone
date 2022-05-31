/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import "../../App.css"

function PhoneList(props) {
    const [activelist, setActivelist] = useState(-1);
    const [activeSub, setActiveSub] = useState(-1);
    const [level, setlevel] = useState(1);
    const both = (l,active) =>{
        setlevel(l);
        if(l != 3)
            setActivelist(active);
        else
            setActiveSub(active);
       
    } 
    const itemsMap = props.items.map((x, i) => {
        return (
            <li key={i} onClick={(e) => both(2, i)}>
                <span>
                    {x.name}
                </span>
            </li>
        );
    })
    const show = () =>{
        const itemsSub = props.items[activelist].sub.map((x, i) => {
            return (
                <li key={i} onClick={(e) => both(3, i)}>
                    <span>
                        {x.name}
                    </span>
                </li>
            );
        })
        return itemsSub;
    }
    const showSub = () =>{
        var items = props.items[activelist].sub[activeSub].sub;
        var show =items.map((x, i) => {
            return (
                <li key={i}>
                    <a>
                        {x}
                    </a>
                </li>
            );
        })
        return show;
    }

    if(level == 1){
        return (
            <div className='phone_list'>
                <a className='title'> All Categories </a>
                <ul>
                    {itemsMap}
                </ul>
            </div>
        );
    }
    else if(level == 2){
        return (
            <div className='phone_list'>
                <span className='title' onClick={(e) => both(1, 1)}> All Categories </span>
                <a className='title'> {props.items[activelist].name} </a>
                <ul>
                    {show()}
                </ul>
            </div>
        );
    }
    else{
        return (
            <div className='phone_list'>
                <span className='title' onClick={(e) => both(1, 1)}> All Categories </span>
                <span className='title' onClick={(e) => both(2, activelist)} > {props.items[activelist].name} </span>
                <a className='title'> {props.items[activelist].sub[activeSub].name} </a>
                <ul>
                    {showSub()}
                </ul>
            </div>
        );
    }
}

export default PhoneList;