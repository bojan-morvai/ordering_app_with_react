import React from 'react';

import './List.css';

const List = props => {

    const b=[];
    const c = [];
    const len = props.alreadyOrdered.drinks.length;

    for(let i=0;i<len;i++){
        if(b.indexOf(props.alreadyOrdered.drinks[i]) === -1){
            b.push(props.alreadyOrdered.drinks[i]);
            c.push({name: props.alreadyOrdered.drinks[i],quantity:1});
        }else{
            let ind = b.indexOf(props.alreadyOrdered.drinks[i]);
            c[ind] = {name: props.alreadyOrdered.drinks[i], quantity: c[ind].quantity+1};
        }      
    }

    const orderedProducts = c.map(prod => {
        return <p key={Math.random()}>{prod.name} {prod.quantity>1 ? `${prod.quantity}x` :null}</p>
    });

    return (
        <div className='list'>
            <h2>Already Ordered</h2>
            {/* <p>{props.alreadyOrdered.drinks}</p> */}
            {orderedProducts}
            <p className='bill'> Current bill: {props.alreadyOrdered.bill} rsd</p>
        </div>
    )
    
}

export default List;


// const ingredients = [];

//     for ( let ingredientName in props.ingredients ) {
//         ingredients.push(
//             {
//                 name: ingredientName,
//                 amount: props.ingredients[ingredientName]
//             }
//         );
//     }

//     const ingredientOutput = ingredients.map(ig => {
//         return <span 
//             style={{
//                 textTransform: 'capitalize',
//                 display: 'inline-block',
//                 margin: '0 8px',
//                 border: '1px solid #ccc',
//                 padding: '5px'
//                 }}
//             key={ig.name}>{ig.name} ({ig.amount})</span>;
//     });