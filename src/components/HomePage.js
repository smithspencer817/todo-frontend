import React from 'react';
import ListsContainer from '../containers/ListsContainer';
import ListForm from '../components/ListForm';
import LogOut from '../components/LogOut';
import { connect } from 'react-redux';

function HomePage(props) {

    return(
        <div id="home-page">
            <ListForm />
            <LogOut />
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