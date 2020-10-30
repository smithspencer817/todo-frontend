import React from 'react';
import ListsContainer from '../containers/ListsContainer';
import ListForm from '../components/ListForm';
import { connect } from 'react-redux';
import { addList } from '../actions/lists';

function HomePage(props) {

    return(
        <div id="home-page">
            <ListForm />
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

export default connect(mapStateToProps, { addList })(HomePage);