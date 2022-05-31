import React, {useState} from 'react';

function DropdownList(props) {
    const [click, setClick] = useState(false)
    const itemsMap = props.items.map((x,i) => {
        return (
            <li key={i}> 
                <a href={x.url}>
                    {x.value}
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

    return (
        <div className='dropdown_list'>
            <a onClick={eventsHandler} className='dropdown_btn'>{props.title}</a>
            <ul key={111} className='overlay' style={{display :click ? "block" : "none"}}>
                {itemsMap}
            </ul>
        </div>
    );
}

export default DropdownList;