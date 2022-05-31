/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

function DropdownListOfList(props) {
    const [click, setClick] = useState(false);
    const [activelist, setActivelist] = useState(0);
    const itemsMap = props.items.map((x, i) => {
        return (
            <li className='over_li' key={i} onClick={(e) => setActivelist(i)}>
                <a className='over_li'>
                    <span className='over_li'>
                        {x.name}
                    </span>
                </a>
            </li> 
        );
    })
    const eventsHandler = () => {
        if(click){
            setClick(false);
        }
        else{
            setClick(true);
        }
    }
    const show = x => {
        const itemsMap = props.items[x].sub.map((x, i) => {
            return (
                <li key={i}>
                    <a>
                        <span>{x.name}</span>
                        <span>{x.sub}</span>
                    </a>
                </li> 
            );
        })
        return itemsMap;
    }
   

    return (
        <div className='dropdown_list'>
            <a onClick={eventsHandler} className='dropdown_btn'>{props.title}</a>
            <ul className='overlay main_over' style={{display :click ? "block" : "none"}}>
                {itemsMap}
            </ul>
            <ul className='overlay sub_over' style={{display :click ? "block" : "none", left:"316px"}}>
                <div className='title'>
                    {props.items[activelist].name}
                </div>
                <ul>
                    {show(activelist)}
                </ul>
            </ul>
        </div>
    );
}

export default DropdownListOfList;