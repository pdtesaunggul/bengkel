import React from 'react';
import axios from 'axios';
import Api from '../Api';

export default class Register extends React.Component {

  
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      birthday: "",
      address: "",
      password: "",
    }
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value,
    });
  }

  handleEmail = e => {
    this.setState({
      email: e.target.value,
    });
  }

  handleBirthday = e => {
    this.setState({
      birthday: e.target.value,
    });
  }

  handleAddress = e => {
    this.setState({
      address: e.target.value,
    });
  }

  handlePassword = e => {
    this.setState({
      password: e.target.value,
    });
  }

  resetState = e => {
    e.preventDefault();
    this.setState({
      username: "",
      email: "",
      birthday: "",
      address: "",
      password: "",
    });
  }

  onSubmit = e => {
    e.preventDefault();
    if(this.state.username !== "" && this.state.email && this.state.birthday !== "" && this.state.address !== "" && this.state.password) {
      const fd = new FormData();
        fd.append('username', this.state.username);
        fd.append('password', this.state.password);
        fd.append('email', this.state.email);
        fd.append('address', this.state.address);
        fd.append('birthday', this.state.birthday);
        fd.append('role', 1);
        axios.post(Api+'user/register', fd)
        .then(res => {
          if(res.status === 200) {
            window.location.reload()
          }
        })
        .catch(err => console.log(err))
    } else {
      console.log("Kosong");
    }
  }

  render () {
    return (
      <div className="container">
        <form className="registerContent" onSubmit={this.onSubmit}>
          <div className="title">REGISTER</div>
          <div className="divide">
            <div className="setengah">
              <div className="field-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Input username ..." className="inputField" value={this.state.username} onChange={this.handleUsername}/>
              </div>
              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder="Input email ..." className="inputField"  value={this.state.email} onChange={this.handleEmail}/>
              </div>
              <div className="field-group">
                <label htmlFor="birthday">Birthday</label>
                <input type="text" name="birthday" id="birthday" placeholder="Input birthday ..." className="inputField"  value={this.state.birthday} onChange={this.handleBirthday}/>
              </div>
              <div className="field-group">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" placeholder="Input address ..." className="inputField" value={this.state.address} onChange={this.handleAddress}/>
              </div>
            </div>
            <div className="setengah">
              <div className="field-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" placeholder="Input password ..." className="inputField"  value={this.state.password} onChange={this.handlePassword}/>
              </div>
            </div>
          </div>
          <div>
            <button type="reset" className="button-red" onClick={this.resetState}>RESET</button>
            <button type="submit" className="button-blue">SAVE</button>
          </div>
          <div className="helper">Have an account?&nbsp;
            <a href="./login">Login</a>
          </div>
        </form>
      </div>
    );
  }
}