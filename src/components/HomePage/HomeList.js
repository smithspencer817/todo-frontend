import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteList, updateList } from '../../actions/lists';
import { addCurrentWorkingList } from '../../actions/currentWorkingList';
import { connect } from 'react-redux';
import { Trash, Pencil } from 'react-bootstrap-icons';

function HomeList(props) {

    const { name, id } = props.list

    const [editing, setEditing] = useState(false)
    let history = useHistory();

    function handleEdit(e) {
        // key code 13 is the 'enter' key
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

    function viewListItems() {
        props.addCurrentWorkingList(props.list)
        history.push('/list-view')
    }

    return (
        <div className="home-page-list">
            {
                editing ? 
                <div>
                    <form>
                        <input
                            className="list-name-edit-form"
                            type="text"
                            onKeyDown={(e) => handleEdit(e)}
                        >
                        </input>
                    </form>
                </div>
                : 
                <div onClick={() => viewListItems()}>{name.toUpperCase()}</div>
            }
            <div className="home-page-list-buttons">
                <Pencil onClick={() => setEditing(!editing)}></Pencil>
                <Trash onClick={() => props.deleteList(id)}></Trash>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentWorkingList: state.currentWorkingList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteList: listId => dispatch(deleteList(listId)),
        updateList: listData => dispatch(updateList(listData)),
        addCurrentWorkingList: list => dispatch(addCurrentWorkingList(list))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeList);