import React from 'react';
import axios from 'axios';
import Api from '../Api';

export default class User extends React.Component {

  constructor() {
    super()
    this.state = {
      location: "",
      jenislayanan: "",
      dataLayanan: [],
    }
    this.getDataLayanan()
  }

  getDataLayanan = () => {
    axios.get(Api+'service')
    .then(res => this.setState({
      dataLayanan: res.data
    }))
    .catch(err => console.log(err))
  }

  handleLocation = e => {
    this.setState({
      location: e.target.value
    })
  }

  handleJenisLayanan = e => {
    this.setState({
      jenislayanan: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    if(this.state.location !== "" || this.state.jenislayanan !== "") {
      const fd = new FormData();
      fd.append('user_id', localStorage.getItem('user'));
      fd.append('layanan_id', this.state.jenislayanan);
      fd.append('lokasi', this.state.location);
      axios.post(Api+'transaksi/add', fd)
      .then(res => {
        if(res.status === 200){
          window.location.replace('/user')
        }
      })
      .catch(err => console.log(err))
    }
  }

  render () {
    return (
      <div className="container">
        <div className="header flex-end">
          <a href="/login">Logout</a>
        </div>
        <form className="userrequestContent" onSubmit={this.onSubmit}>
          <div className="title">Request Service</div>
          <div className="field-group">
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" placeholder="Input location ..." className="inputField" value={this.state.location} onChange={this.handleLocation}/>
          </div>
          <div className="field-group">
            <label htmlFor="jenislayanan">Jenis Layanan</label>
            <select className="inputField" onChange={this.handleJenisLayanan}>
              <option>---------</option>
              {
                this.state.dataLayanan.map((data, key) => (
                  <option value={data.id} key={key}>{data.nama}</option>
                ))
              }
            </select>
          </div>
          <div>
            <button type="reset" className="button-red">CANCEL</button>
            <button type="submit" className="button-blue">SEND</button>
          </div>
        </form>
      </div>
    );
  }
}