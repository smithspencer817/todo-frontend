import React from 'react';
import List from '../components/List';
import { connect } from 'react-redux';

function ListsContainer(props) {
    return (
        <div>
            <ul>
                {props.lists.map(list => <List list={list} />)}
            </ul>
        </div>
    );
}

const mapStateToProps = state => { 
    return {lists: state.lists}
};

export default connect(mapStateToProps)(ListsContainer);