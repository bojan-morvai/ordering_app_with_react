import React from 'react';
import './OrderButton.css'

const OrderButton = props => {
    let classes = props.drinkType;

    if(props.deleting){
        classes+= ' deleting';
    }

    return(
            <button className={classes} onClick={props.click}>
                {props.children}
            </button>
    )
}

export default OrderButton;