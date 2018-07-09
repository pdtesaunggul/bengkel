import React from 'react';
import axios from 'axios';
import Api from '../Api';

export default class Kasir extends React.Component {

  constructor() {
    super();
    this.state = {
      toggleForm: false,
      data: [],
    }
    this.getData()
  }
  
  getData = () => {
    axios.get(Api+'transaksi')
    .then(res => this.setState({
      data: res.data
    }))
    .catch(err => console.log(err))
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
            <a href="/login">Logout</a>
          </div>
          <div className="kasirContent">
            <div className="title">Request List</div>
            <div className="cardSection">

              {
                this.state.data.map((data, key) => (
                  <div className="cardContainer" key={key}>
                    <div className="top">
                      <div className="main">{data.username}</div>
                    </div>
                    <div className="bottom">
                      <div className="layanan">{data.nama_layanan}</div>
                      <div className="harga">Rp. {data.harga}</div>
                    </div>
                    <span className="flagRed" />
                  </div>
                ))
              }

            </div>
          </div>
        </div>
        <div className={this.state.toggleForm === false ? "overlay" : "overlay active"}>
          <div className="modal-center">
            <form className="flex-center">
              <div className="title">Transaction Form</div>
              <div className="field-group">
                <label htmlFor="name">Name</label>
                <div className="inputField" id="name">Lorem Ipsum</div>
              </div>
              <div className="field-group">
                <label htmlFor="location">Location</label>
                <div className="inputField" id="Location">Location</div>
              </div>
              <div className="field-group">
                <label htmlFor="jenislayanan">Jenis Layanan</label>
                <div className="inputField" id="jenislayanan">Jenis Layanan</div>
              </div>
              <div className="field-group">
                <label htmlFor="harga">Harga</label>
                <div className="inputField" id="harga">Rp. Harga</div>
              </div>
              <div className="field-group">
                <label htmlFor="mekanik">Mekanik</label>
                <input type="text" name="mekanik" id="mekanik" placeholder="Input jenis layanan ..." className="inputField" />
              </div>
              <div className="field-group">
                <button className="button-blue" type="submit">Save</button>
                <button className="button-green" type="submit">Validasi</button>
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