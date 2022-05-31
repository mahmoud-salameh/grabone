import React from 'react';


import "../../App.css"

function LinksBar(props) {
    const itemsMap = props.items.map( (x,i) => {
            return (
                (x.icon || x.value)?
                <li key={i}>
                    <a href={x.url}> 
                        <div>
                        <i className={x.icon}></i>
                        </div> 
                        <div>
                        {x.value}
                        </div>
                    </a>
                </li> 
                :x
            );
        
    })

    return (
        <div className='links_bar'>
            <ul>
                {itemsMap}
            </ul>
        </div>
    );
}

export default LinksBar;