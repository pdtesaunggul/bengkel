import React from 'react';
import axios from 'axios';
import Api from '../Api';

export default class AdminRequest extends React.Component {

  constructor() {
    super();
    this.state = {
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
  
  render () {
    return (
      <React.Fragment>
        <div className="container">
          <div className="header flex-end">
            <a href="/admin">Request</a>&nbsp;&nbsp;
            <a href="/admin-admin">Admin</a>&nbsp;&nbsp;
            <a href="/admin-user">User</a>&nbsp;&nbsp;
            <a href="/admin-kasir">Kasir</a>&nbsp;&nbsp;
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
          <div className="footer flex-end">
          </div>
        </div>
      </React.Fragment>
    );
  }
}