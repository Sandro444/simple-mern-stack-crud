import React from 'react';
import { Component } from "react";
import './App.css';
import PostMessages from './components/PostMessages';
import PostMessagesForm from "./components/PostMessagesForm";
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      title: "",
      message: ""
    }
  }

  componentDidMount(){
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch('http://localhost:4000/postmessages')
    .then(res => res.json())
    .then(data => this.setState({
      posts: data
    }))
    .catch(err=>console.log(err))
  }

  submitForm = (e) => {
    e.preventDefault()
    let newRecord = {
      title: this.state.title,
      message: this.state.message,
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecord)
  };
  fetch('http://localhost:4000/postmessages', requestOptions)
      .then(response => {if(response.status == 200){
        this.fetchPosts();
        this.setState({
          title: "",
          message: ""
        })
      }})


  }
  
  titleChange = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.value
    })
  }
  messageChange = (e) => {
    e.preventDefault();
    this.setState({
      message: e.target.value
    })
  }
  delete = (id) => {
    fetch("http://localhost:4000/postmessages/" + id, {
      method: "DELETE"
    } ).then(res=>{
      if(res.status == 200){
        this.fetchPosts()
      }
    })
  }

  submitUpdate = (e,id,title,message) => {
    e.preventDefault();
    let newRecord = {
      title: title,
      message: message,
    }

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecord)
    };

    fetch("http://localhost:4000/postmessages/"+id, requestOptions)
    .then(res=>{if(res.status == 200){
      console.log("updated")
    }})
    let allPosts = this.state.posts;
    let filtered = allPosts.map(post=>{
      if(post._id == id){
        post.title = title
        post.message = message
      }
      return post
    })
    this.setState({
      posts: filtered
    })
    
  }

  render(){
    return (
      <div className="App">
        <h1>Simple MERN Stack CRUD App</h1>
        <PostMessages submitUpdate={this.submitUpdate} delete={this.delete} update={this.update} posts={this.state.posts} />
        <PostMessagesForm messageChange={this.messageChange} titleChange={this.titleChange}  title={this.state.title} message={this.state.message} submitForm={this.submitForm} />
        <h1>By Sandro Tsereteli</h1>
      </div>
    );
  }
  
}

export default App;
