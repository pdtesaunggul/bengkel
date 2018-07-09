import React from 'react';
import axios from 'axios';
import Api from '../Api';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    }
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value,
    });
  }

  handlePassword = e => {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit = e => {
    e.preventDefault();
    if(this.state.username !== "" && this.state.password !== "") {
      const fd = new FormData();
      fd.append('username', this.state.username);
      fd.append('password', this.state.password);
      axios.post(Api+'user/login', fd)
      .then(res => {
        localStorage.setItem('user', res.data.id)
        if(res.data.level_id === 1) {
          window.location.replace('/user-request')
        } /*else if(res.data.level_id === 2) {
          window.location.replace('/mekanik')
        } */else if(res.data.level_id === 3) {
          window.location.replace('/kasir')
        } else if(res.data.level_id === 4) {
          window.location.replace('/admin')
        }
      })
      .catch(err => console.log(err))
    } else {
      console.log("Kosong")
    }
  }

  render () {
    return (
      <form className="container loginContent" onSubmit={this.onSubmit}>
        <div className="title">LOGIN</div>
        <input className="inputField" type="text" placeholder="Input username ..." value={this.state.username} onChange={this.handleUsername}/>
        <input className="inputField" type="password" placeholder="Input password ..."  value={this.state.password} onChange={this.handlePassword}/>
        <button className="button-blue" type="submit">LOGIN</button>
        <div className="helper">Don't have an account?&nbsp;
          <a href="/register">Register</a>
        </div>
      </form>
    );
  }
}