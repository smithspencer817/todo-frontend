import React from 'react';
import List from '../components/List';

export default function ListsContainer(props) {
    return (
        <div>
            <ul>
                {props.lists.map(list => <List list={list} key={list.id}/>)}
            </ul>
        </div>
    );
};