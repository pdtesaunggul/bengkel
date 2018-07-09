import React from 'react';
import axios from 'axios';
import Api from '../Api';

export default class AdminUser extends React.Component {

  constructor() {
    super();
    this.state = {
      toggleForm: false,
      username: "",
      email: "",
      birthday: "",
      address: "",
      password: "",
      data: []
    }
    this.getData()
  }

  getData = () => {
    axios.get(Api+'user/role/1')
    .then(res => this.setState({
      data: res.data,
    }))
    .catch(err => console.log(err))
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  handleEmail = e => {
    this.setState({
      email: e.target.value
    })
  }

  handleBirthday = e => {
    this.setState({
      birthday: e.target.value
    })
  }

  handleAddress = e => {
    this.setState({
      address: e.target.value
    })
  }

  handlePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    if(this.state.username !== "" && this.state.email !== "" && this.state.birthday !== "" && this.state.address !== "" && this.state.password !== "") {
        // console.log(this.state.username);
        // console.log(this.state.email);
        // console.log(this.state.birthday);
        // console.log(this.state.address);
        // console.log(this.state.password);
        // console.log(this.state.role_id);
        const fd = new FormData();
        fd.append('username', this.state.username);
        fd.append('password', this.state.password);
        fd.append('email', this.state.email);
        fd.append('address', this.state.address);
        fd.append('birthday', this.state.birthday);
        fd.append('role', 1);
        axios.post(Api+'user/register', fd)
        .then(res => {
          console.log(res.status)
          if(res.status === 200) {
            window.location.replace('/user-request')
          }
        })
        .catch(err => console.log(err))
        
    } else {
      console.log("Kosong");
    }
  }

  toggleForm = e => {
    this.setState({
      toggleForm: !this.state.toggleForm,
    });
  }

  render () {
    return (
      <React.Fragment>
        <div className="container">
          <div className="header flex-end">
            <a href="/admin">Request</a>&nbsp;&nbsp;
            <a href="/admin-admin">Admin</a>&nbsp;&nbsp;
            <a href="/admin-kasir">Kasir</a>&nbsp;&nbsp;
            <a href="/admin-user">User</a>&nbsp;&nbsp;
            <a href="/login">Logout</a>
          </div>
          <div className="kasirContent">
            <div className="title">User List</div>
            <div className="cardSection">

              {
                this.state.data.map((data, key) => (
                  <div className="cardContainer" key={key}>
                    <div className="top">
                      <div className="main">{data.username}</div>
                    </div>
                    <div className="bottom">
                      <div className="layanan">{data.role}</div>
                      <div className="harga">{data.birthday}</div>
                    </div>
                    <span className="flagRed" />
                  </div>
                ))
              }

            </div>
          </div>
          <div className="footer flex-end">
            <button className="button-green" onClick={this.toggleForm}>Add</button>
          </div>
        </div>
        <div className={this.state.toggleForm === false ? "overlay" : "overlay active"}>
          <div className="modal-center">
            <form className="flex-center" onSubmit={this.onSubmit}>
              <div className="title">User Form</div>
              <div className="field-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Input username ..." className="inputField" value={this.state.username} onChange={this.handleUsername}/>
              </div>
              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder="Input email ..." className="inputField" value={this.state.email} onChange={this.handleEmail}/>
              </div>
              <div className="field-group">
                <label htmlFor="birthday">Birthday</label>
                <input type="text" name="birthday" id="birthday" placeholder="Input birthday ..." className="inputField" value={this.state.birthday} onChange={this.handleBirthday}/>
              </div>
              <div className="field-group">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" placeholder="Input address ..." className="inputField"  value={this.state.address} onChange={this.handleAddress}/>
              </div>
              <div className="field-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" placeholder="Input password ..." className="inputField"  value={this.state.password} onChange={this.handlePassword}/>
              </div>
              <div className="field-group">
                <button className="button-blue" type="submit">Save</button>
              </div>
            </form>
          </div>
          <div className={this.state.toggleForm === false ? "close-button flex-center" : "close-button flex-center active"} id="closeModalButton" onClick={e => this.toggleForm(e)}>
            <span />
          </div>
        </div>
      </React.Fragment>
    );
  }
}