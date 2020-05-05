import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import OrderButton from './OrderButton';
import './OrderForm.css';
import List from './List/List';

const OrderForm = (props) => {

	const currTable = props.currentTable;
	const dispatch = useDispatch();

	const currOrder = useSelector(state => state.orders[currTable]);
	const deleting = useSelector(state => state.deleting_orders);

	const orderSomethingHandler = (currTable, deleting, product, price) =>{
		dispatch({type:'ORDER_PRODUCT', whichTable:currTable, deleting:deleting, product:product, price:price});
	};

	const closeFormHandler = () => {
		dispatch({type:'ORDERING'});
		dispatch({type:'DELETE_OVER'});
	};

	const payHandler = (currTable) => {
		dispatch({type:'PAY', whichTable:currTable});
		dispatch({type:'DELETE_OVER'});
	}

	const deleteOrderHandler = (currTable) => {
		dispatch({type:'DELETE_ORDER', whichTable:currTable})
	}

	// const renameTableHandler = () =>{
	// 	let tableName = prompt('Set table name: ');
	// 	tableNum[currTable] = tableName;
	// 	console.log(tableNum);
	// }

	const tableNum = {'table_01':'1', 'table_02':'2', 'table_03':'3','table_04':'4','table_05':'5','table_06':'6'}

	return props.show ? (
		<div className="orderingSheet">
			<div className='place-for-buttons'>
				<h2>Ordering for table {tableNum[currTable]}</h2>
				<OrderButton deleting={deleting} drinkType='alcoholic' click={() => orderSomethingHandler(currTable, deleting, 'pivo', 130)}>Pivo</OrderButton>
				<OrderButton deleting={deleting} drinkType='soda' click={() => orderSomethingHandler(currTable, deleting, 'coca-cola', 80)}>Coca-cola</OrderButton>
				<OrderButton deleting={deleting} drinkType='alcoholic' click={() => orderSomethingHandler(currTable, deleting, 'vino', 100)}>Vino</OrderButton>
				<OrderButton deleting={deleting} drinkType='soda' click={() => orderSomethingHandler(currTable, deleting, 'gusti sok', 90)}>Gusti sok</OrderButton>
				<button onClick={() => payHandler(currTable)}>Pay</button>
				<button onClick={closeFormHandler}>Close</button>
				<button onClick={()=>deleteOrderHandler(currTable)}>Delete</button>
				{/* <button onClick={renameTableHandler}>Rename Table</button> */}
			</div>
			<List alreadyOrdered={currOrder}/>
		</div>
	) : null;
};

export default OrderForm;
