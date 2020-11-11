import React from 'react';

export default function ListItemsContainer(props) {
    return (
        <div id="home-page-list-container">
            {
                props.listItems.map(listItem => 
                    <div className="individual-home-list-container" key={listItem.id}>
                        <h3>{listItem.description}</h3>
                    </div>
                )
            }
        </div>
    );
};