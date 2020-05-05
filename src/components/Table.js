import React from 'react';
import './Table.css';

const Table = props => {

    return (
        <React.Fragment>
            <div className={props.shape} onClick={props.tableClick}><p>{props.children}</p></div>
        </React.Fragment>
    )
}

export default Table;