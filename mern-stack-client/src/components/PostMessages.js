import React from 'react'

import UpdateForm from "./UpdateForm";

export default function PostMessages(props) {
    let allPosts = props.posts.map(post=>{
        return(
            <div key={post._id} className="single-post">
                <h1>{post.title}</h1>
                <hr></hr>
                <p>{post.message}</p>
                <hr></hr>
                <button className="delete" onClick={()=>props.delete(post._id)}>Delete</button>
                <button className="update" onClick={()=>{
                    let form = document.getElementById(post._id);
                    if(form.style.display == "none"){
                        form.style.display = "block"
                    } else{
                        form.style.display = "none"
                    }
                }}>Update</button>
                <UpdateForm submitUpdate={props.submitUpdate} id={post._id} title={post.title} message={post.message} />
            </div>
        )
    });
    return (
        <div>
            {allPosts}
        </div>
    )
}
