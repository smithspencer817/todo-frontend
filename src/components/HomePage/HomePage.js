import React from 'react';
import ListsContainer from './ListsContainer';
import ListForm from './ListForm';
import LogOut from './LogOut';
import { connect } from 'react-redux';

function HomePage(props) {

    return(
        <div id="home-page">
            <div id="home-page-nav-bar">
                <ListForm />
                <LogOut />
            </div>
            <ListsContainer lists={props.lists}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        lists: state.lists,
        user: state.user
    }
}

export default connect(mapStateToProps)(HomePage);