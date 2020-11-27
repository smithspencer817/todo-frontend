import React from 'react';
import { useHistory } from 'react-router-dom';
import ListItemForm from './ListItemForm';
import ListItemsContainer from '../../containers/ListItemsContainer';
import { connect } from 'react-redux';

function ListView(props) {

    let history = useHistory();

    let currentList = props.lists.find(list => list.id === props.currentWorkingList.id)

    return(
        <div id="home-page">
           <div id="home-page-nav-bar">
                <button onClick={() => history.push('/home')}>Back</button>
                <button>Search</button>
                <ListItemForm />
            </div>
            <ListItemsContainer listItems={currentList.listItems}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        currentWorkingList: state.currentWorkingList,
        lists: state.lists
    }
}

export default connect(mapStateToProps)(ListView);
