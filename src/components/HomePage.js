import React, { useEffect } from 'react';
import ListsContainer from '../containers/ListsContainer';
import ListForm from '../components/ListForm';
import { connect } from 'react-redux';
import { addList } from '../actions/lists';

function HomePage(props) {

    useEffect(() => {
        const id = props.user.id
        fetch(`http://localhost:3000/api/users/${id}/lists`)
        .then(res => res.json())
        .then(lists => lists.map(list => props.addList(list)))
        // eslint-disable-next-line
    }, []);

    return(
        <div>
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