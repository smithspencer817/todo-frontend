import React, { useState } from 'react';
import { deleteList, updateList } from '../actions/lists';
import { connect } from 'react-redux';
import { Trash, Pencil } from 'react-bootstrap-icons';

function HomeList(props) {

    const { name, id } = props.list
    const [editing, setEditing] = useState(false)

    function handleEdit(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            const data = {
                name: e.target.value,
                id: id
            }
            props.updateList(data)
            setEditing(false)
        }
    }

    return (
        <div className="home-page-list">
            {
                editing ? 
                <div>
                    <form>
                        <input className="list-name-edit-form" type="text" onKeyDown={(e) => handleEdit(e)}></input>
                    </form>
                </div>
                : 
                <div>{name.toUpperCase()}</div>
            }
            <div className="home-page-list-buttons">
                <Pencil onClick={() => setEditing(!editing)}></Pencil>
                <Trash onClick={() => props.deleteList(id)}></Trash>
            </div>
        </div>
    )
}

export default connect(null, { deleteList, updateList })(HomeList);