import React from 'react';
import ListItem from './ListItem';

export default function ListItemsContainer(props) {

    return (
        <div id="home-page-list-container">
            {
                props.listItems.length > 0 ?
                    props.listItems.map(listItem => 
                        <ListItem listItem={listItem} key={listItem.id}/>
                    )
                :
                <div className="list-item-empty-alert">
                    <h1>LIST IS EMPTY</h1>
                    <br></br>
                    <h5>Click on 'Add Item' above to add new list items</h5>
                </div>
            }
        </div>
    );
};