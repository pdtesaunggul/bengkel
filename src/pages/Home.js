import React from 'react';

export default class Home extends React.Component {
  render () {
    return (
      <div className="container background-full">
        <div className="header">
          <div className="brand">MoGe</div>
          <ul className="leftBar">
            <li>
              <a href="/login">MASUK</a>
            </li>
            <li>
              <a href="/register">DAFTAR</a>
            </li>
          </ul>
        </div>
        <div className="homeContent">
          <div className="title">Lorem Ipsum</div>
          <div className="detail">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="footer">
          Copyright © 2018 by MoGe Corporation
        </div>
      </div>
    );
  }
}