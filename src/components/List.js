import React from 'react';
import { deleteList } from '../actions/lists';
import { connect } from 'react-redux';

function List(props) {
    const { name, id } = props.list

    function handleDelete(id) {
        console.log(id);
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
        <li>{name} {id} <button onClick={() => handleDelete(id)}>X</button></li>
    )
}

export default connect(null, { deleteList })(List);