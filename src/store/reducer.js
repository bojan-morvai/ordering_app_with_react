const initialState = {
	orders: {
		table_01: {
			busy: false,
			bill: 0,
			drinks: []
		},
		table_02: {
			busy: false,
			bill: 0,
			drinks: []
		},
		table_03: {
			busy: false,
			bill: 0,
			drinks: []
		},
		table_04: {
			busy: false,
			bill: 0,
			drinks: []
		},
		table_05: {
			busy: false,
			bill: 0,
			drinks: []
		},
		table_06: {
			busy: false,
			bill: 0,
			drinks: []
		}
	},
	user: 'bojan',
	total_price: 0,
	ordering:false,
	deleting_orders:false
};

const reducer = (state = initialState, action) => {

	const table = action.whichTable;
	switch (action.type) {
		case 'ORDERING':
			return {
				...state,
				ordering: !state.ordering
			}
		case 'ADD_TO_BILL':
			return {
				...state,
				total_price: state.total_price + action.price,
				orders: {
					...state.orders,
					[table]: {
						...state.orders[table],
						bill: state.orders[table].bill + action.price
					}
				}
			};
		case 'ORDER_PRODUCT':
			if(action.deleting){
				let drinks = [...state.orders[table].drinks];
				let index;
				for(let i=0;i<drinks.length;i++){
					if(action.product===drinks[i]){
						index = i;
					}
				}
				if(index===undefined){
					return state;
				}
				let newDrinks = [...drinks.slice(0,index), ...drinks.slice(index+1)] 

				return {
					...state,
					total_price: state.total_price - action.price,
					orders: {
						...state.orders,
						[table]: {
							busy: true,
							bill: state.orders[table].bill - action.price,
							drinks: newDrinks
						}
					}
				};
			}else{
				return {
					...state,
					total_price: state.total_price + action.price,
					orders: {
						...state.orders,
						[table]: {
							busy: true,
							bill: state.orders[table].bill + action.price,
							drinks: [...state.orders[table].drinks, action.product]
						}
					}
				};
			}
			

		case 'PAY':
			return {
				...state,
				orders: {
					...state.orders,
					[table]:{
						busy:false,
						bill: 0,
						drinks:[]
					}
				}
			};

		case 'DELETE_ORDER':
			return {
				...state,
				deleting_orders:!state.deleting_orders
			};

		case 'DELETE_OVER':
			return{
				...state,
				deleting_orders:false
			};

		default:
			return state;
	}
};

export default reducer;
