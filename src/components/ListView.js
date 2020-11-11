import React from 'react';
import ListItemsContainer from '../containers/ListItemContainer'
import { connect } from 'react-redux';

function ListView(props) {
    return(
        <div id="home-page">
           <div id="home-page-nav-bar">
                <button>Back</button>
                <button>Search</button>
                <button>New List Item</button>
            </div>
            <ListItemsContainer listItems={props.listItems}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        listItems: state.listItems
    }
}

export default connect(mapStateToProps)(ListView);
