import React, { useState } from 'react';
import { deleteList } from '../actions/lists';
import { connect } from 'react-redux';
import { Trash, Pencil } from 'react-bootstrap-icons';

function HomeList(props) {
    const { name, id } = props.list

    const [editing, setEditing] = useState(false)

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

    return (
        <div className="home-page-list">
            {editing ? null : <div>{name.toUpperCase()}</div>}
            <div className="home-page-list-buttons">
                <Pencil></Pencil>
                <Trash onClick={() => handleDelete(id)}>x</Trash>
            </div>
        </div>
    )
}

export default connect(null, { deleteList })(HomeList);