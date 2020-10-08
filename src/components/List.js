import React from 'react';

export default function List(props) {
    const { name } = props.list
    return(
        <li>{name}</li>
    )
}