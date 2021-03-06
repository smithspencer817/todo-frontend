import React from 'react';
import ListItem from './ListItem';

export default function ListItemsContainer(props) {

    return (
        <div id="home-page-list-container">
            {
                props.listItems.map(listItem => 
                    <ListItem listItem={listItem} key={listItem.id}/>
                )
            }
        </div>
    );
};