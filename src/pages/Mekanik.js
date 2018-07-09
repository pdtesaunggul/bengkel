import React from 'react';

export default class Mekanik extends React.Component {
  render () {
    return (
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
              <label for="name">Username</label>
              <div className="inputField">Lorem Ipsum</div>
            </div>
            <div className="field-group">
              <label for="name">Location</label>
              <div className="inputField">Jl. Lorem Ipsum, Dolor Sit, Amet</div>
            </div>
            <div className="field-group">
              <label for="name">Jenis Layanan</label>
              <div className="inputField">Lorem Ipsum</div>
            </div>
            <div className="field-group">
              <label for="name">Harga</label>
              <div className="inputField">Rp. Harga Total</div>
            </div>
          </div>
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
        </div>
      </div>
    );
  }
}