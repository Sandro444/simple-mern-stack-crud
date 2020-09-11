import React from 'react'

export default function PostMessagesForm(props) {
    return (
        <div>
            <h3 style={{margin:0,marginBottom:5}}>Create Post</h3>
            <form onSubmit={props.submitForm}>
                <input className="title-input-post" name="title" value={props.title} onChange={(e)=>props.titleChange(e)}></input><br></br>
                <input className="message-input-post" name="message" value={props.message} onChange={(e)=>props.messageChange(e)}></input><br></br>
                <input style={{
                    backgroundColor: "green",
                    color: "white",
                    cursor: "pointer",
                    padding: 3
                }} type="submit" value="submit"></input>
            </form>
        </div>
    )
}
