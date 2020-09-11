import React, { Component } from 'react'

export default class UpdateForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            message: ""
        }
    }

    componentDidMount(){
        this.setState({
            title: this.props.title,
            message: this.props.message
        })
    }

    updateTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    updateMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    hideForm = () => {
        document.getElementById(this.props.id).style.display = "none"
    }

    render() {
        return (
            <div>
                {<form style={{display:"none"}} id={this.props.id} onSubmit={(event)=>this.props.submitUpdate(event,this.props.id, this.state.title, this.state.message)}>
                    <div className="title-input-update"><input onChange={this.updateTitle} placeholder="title" value={this.state.title}></input> Message<br></br></div>
                    <div className="message-input-update"><input onChange={this.updateMessage} placeholder="message" value={this.state.message}></input> Title<br></br></div>
                    <input className="update" type="submit" onClick={this.hideForm}></input>
                </form>}
            </div>
        )
    }
}
