import React from 'react';
import { deleteList } from '../actions/lists';
import { connect } from 'react-redux';

function HomeList(props) {
    const { name, id } = props.list

    function handleDelete(id) {
        const token = document.cookie.slice(10);
        fetch(`http://localhost:3000/api/lists/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        props.deleteList(id);
    }

    return(
        <div className="home-page-list">
            <div>{name.toUpperCase()}</div>
            <div onClick={() => handleDelete(id)}>x</div>
        </div>
    )
}

export default connect(null, { deleteList })(HomeList);