import React from 'react';
import ListsContainer from '../containers/ListsContainer';
import ListForm from '../components/ListForm';

export default function HomePage() {
    return(
        <div>
            <ListForm />
            <ListsContainer />
        </div>
    );
};