import React from 'react';
import axios from 'axios';
import Api from '../Api';

export default class User extends React.Component {

  constructor() {
    super();
    this.state = {
      toggleForm: false,
      data: [],
    };
    this.getData()
  }

  getData = () => {
    axios.get(Api+'transaksilast/'+localStorage.getItem('user'))
    .then(res => this.setState({
      data: res.data
    }))
    .catch(err => console.log(err))
  }

  toggleForm = e => {
    this.setState({
      toggleForm: !this.state.toggleForm
    });
  }

  render () {
    return (
      <React.Fragment>
        <div className="container">
          <div className="header flex-end">
            <a href="/login">Logout</a>
          </div>
          <div className="divide">
            <div className="setengah">
              <div className="title">
                My Service Request
              </div>
              <div className="field-group">
                <label htmlFor="name">Username</label>
                <div className="inputField">{this.state.data.username}</div>
              </div>
              <div className="field-group">
                <label htmlFor="name">Location</label>
                <div className="inputField">{this.state.data.lokasi}</div>
              </div>
              <div className="field-group">
                <label htmlFor="name">Jenis Layanan</label>
                <div className="inputField">{this.state.data.nama_layanan}</div>
              </div>
              <div className="field-group">
                <label htmlFor="name">Harga</label>
                <div className="inputField">Rp. {this.state.data.harga}</div>
              </div>
            </div>
            { /*
            <div className="setengah">
              <div className="title">
                Mechanic
              </div>
              <div className="field-group-center-img">
                <div className="imgprofile"></div>
              </div>
              <div className="field-group">
                  <label>Nama</label>
                <div className="inputField">Lorem Ipsum</div>
              </div>
            </div>
            */}
          </div>
          { /*
          <div className="footer flex-end">
            <button className="button-blue" id="userPayButton" onClick={e => this.toggleForm(e)}>PAY</button>
          </div>
          */ }
        </div>
        <div className={this.state.toggleForm === false ? "overlay" : "overlay active"} >
          <div className="modal-center">
            <form className="flex-center">
              <div className="title">Transaction Form</div>
              <div className="inputField">Rp. Harga</div>
              <input className="inputField" type="text" name="harga" id="harga" placeholder="Input harga ..." />
              <button className="button-blue" type="submit">PAY</button>
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