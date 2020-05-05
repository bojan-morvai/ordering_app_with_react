import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Table from './components/Table';
import OrderForm from './components/Order/OrderForm';
import Backdrop from './components/Backdrop';



const App = () => {
  	// const [ ordering, setOrdering ] = useState(false);
  	const [currentTable, setCurrentTable] = useState(null);
  
	const dispatch = useDispatch();
	  
	const ordering = useSelector(state => state.ordering);
	const tables = useSelector(state => state.orders);
	const totalPrice = useSelector(state => state.total_price)

  	const AddToBillHandler = (table,num) => {
    	// dispatch({type:'ADD_TO_BILL', whichTable: table, price:num})
	};

	const removeBackdrop = () => {
		// setOrdering(false);
		dispatch({type:'ORDERING'})
	};

	const tableClick = (tableNum) => {
		setCurrentTable(tableNum);
		// setOrdering(true);
		dispatch({type:'ORDERING'});
		dispatch({type:'DELETE_OVER'})
    	// AddToBillHandler(tableNum,50)
    };
  
  	const showMe = () => {
    	console.log(tables);
    	console.log(totalPrice);
  	}

	return (
		<div className="App">
			<Backdrop show={ordering} clicked={removeBackdrop} />
			<OrderForm show={ordering} currentTable={currentTable} />
			<Table shape="tables round" tableClick={() => tableClick('table_01')}>
				1
			</Table>
			<Table shape="tables cube" tableClick={() => tableClick('table_02')}>
				2
			</Table>
			<Table shape="tables cube" tableClick={() => tableClick('table_03')}>
				3
			</Table>
			<Table shape="tables round" tableClick={() => tableClick('table_04')}>
				4
			</Table>
			<Table shape="tables rectangle-x" tableClick={() => tableClick('table_05')}>
				5
			</Table>
			<Table shape="tables rectangle-y" tableClick={() => tableClick('table_06')}>
				6
			</Table>
      		<button onClick={showMe}>Result</button>
		</div>
	);
};

export default App;
