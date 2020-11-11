import React from 'react';
import HomeList from '../components/HomeList';

export default function ListsContainer(props) {
    return (
        <div id="home-page-list-container">
            {
                props.lists.map(list => 
                    <div className="individual-home-list-container" key={list.id}>
                        <HomeList list={list} key={list.id}/>
                    </div>
                )
            }
        </div>
    );
};