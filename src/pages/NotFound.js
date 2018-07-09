import React from 'react';

export default class NotFound extends React.Component {
  render () {
    return (
      <div className="container background-full flex-center" style={{color: "#fff"}}>
        <h1>Page Not Found T.T</h1>
        <p>Back To <a href="/" style={{color: "#fff"}}>Homepage</a></p>
      </div>
    );
  }
}