import React, { useState } from 'react';
import { deleteList } from '../actions/lists';
import { connect } from 'react-redux';
import { Trash, Pencil } from 'react-bootstrap-icons';

function HomeList(props) {
    const { name, id } = props.list
    const token = document.cookie.slice(10);

    const [editing, setEditing] = useState(false)

    function handleDelete() {
        fetch(`http://localhost:3000/api/lists/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        props.deleteList(id);
    }

    function handleEdit(e) {
        if (e.keyCode === 13) {
            const data = {
                name: e.target.value
            }
            e.preventDefault();
            fetch(`http://localhost:3000/api/lists/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
            setEditing(false)
        }
        
    }

    return (
        <div className="home-page-list">
            {
                editing ? 
                <div>
                    <form>
                        <input type="text" onKeyDown={(e) => handleEdit(e)}></input>
                    </form>
                </div>
                : 
                <div>{name.toUpperCase()}</div>
            }
            <div className="home-page-list-buttons">
                <Pencil onClick={() => setEditing(!editing)}></Pencil>
                <Trash onClick={handleDelete}></Trash>
            </div>
        </div>
    )
}

export default connect(null, { deleteList })(HomeList);