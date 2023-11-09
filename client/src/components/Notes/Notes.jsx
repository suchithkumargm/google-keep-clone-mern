import React, { useEffect, useState } from "react";
import './notes.css'
import { CreateNote } from "./CreateNewNote";
import { Note } from "./Note";

export function Notes(){
    // async function getnotes(){
    //     const response=await fetch('http://localhost:4000/note/getnote/65492ae02a14936e63fd85f3');
    //     // console.log(response);
    //     const data=await response.json();
    //     console.log(data);

    // }

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function fetchNotes() {
            try {
                const response = await fetch('http://localhost:4000/note/getnote',{
                    method:'GET',
                   headers:{
                    id:localStorage.getItem('id')
                   }
                });
                const data = await response.json();
                // console.log(data);
                setNotes(data); // Store the fetched notes in the state
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        }
        fetchNotes();
    }, []); // The empty dependency array means it only runs once when the component is mounted

    
    
return(
    <>
    <CreateNote/>
    <div className="notes">
        {
            notes.length>0 && (
                notes.map(note=>(
                <Note key={note._id} id={note._id} title={note.title} content={note.content}/>
                ))
            )
        }
    </div>
    </>
)
}