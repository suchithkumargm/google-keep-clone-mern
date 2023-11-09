import React, { useEffect, useState } from "react";
import './Edit.css';
import { useParams, useNavigate, Link } from "react-router-dom";

export function Edit() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    async function handleEdit(event) {
        event.preventDefault();
        //send edit to database and after editing go back to notes home page
        console.log("hello");
        const body = {
            "title": title,
            "content": content,
            "userid": localStorage.getItem('id'),
        }
        const response = await fetch('http://localhost:4000/note/updatenote/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        if (response.ok) {
            navigate('/notes');
        }
        console.log(title);
    }

    function handleTitle(event) {
        setTitle(event.target.value);
    }

    function handleContent(event) {
        setContent(event.target.value);
    }

    useEffect(() => {
        async function fetchnote() {
            //get title and content from backend using id
            const response = await fetch('http://localhost:4000/note/getnote/' + id);
            const data = await response.json();
            console.log(data);
            setTitle(data.title);
            setContent(data.content);
        }
        fetchnote();
    }, [id]);
    return (
        <div className="edit-container">
            <h1>Edit Note</h1>
            <form>
                <input className="edit-title" value={title} onChange={handleTitle} />
                <textarea onChange={handleContent} value={content} className="edit-content"></textarea>
                <Link className="edit-done" onClick={handleEdit}>Done</Link>
            </form>
        </div>
    )
}