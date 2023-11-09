import React from "react";
import { useNavigate } from "react-router-dom";

import './notes.css';
import deleteIcon from '../../images/delete.svg';

export function Note(props) {

    const navigate = useNavigate();
    const id = props.id;
    function handleEdit() {
        navigate('/edit/' + id);
    }
    async function handleDelete(event) {
        event.stopPropagation();
        console.log("hi");
        const response = await fetch('http://localhost:4000/note/deletenote/' + props.id, {
            method: 'DELETE',
        });
        if (response.ok) {
            window.location.reload();
        }
    }
    return (
        <div className="note" onClick={handleEdit}>
            <h5>{props.title}</h5>
            <img src={deleteIcon} alt="delete" onClick={handleDelete}/>
            <p>{props.content}</p>
        </div>
    )
}