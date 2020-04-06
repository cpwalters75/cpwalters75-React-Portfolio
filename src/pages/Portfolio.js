import React from 'react';


export default function Porfolio() {
    return (
<div className="container">
        <div className="row">
        
    <div className="card-deck">
    <div className="card col-4" >
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card col-4" >
  <div className="card-body">
    <h5 className="card-title">Larry Ipsum</h5>
    <p className="card-text">A fun ipsum generator based on class lectures. </p>
    <a href="https://salty-dawn-42604.herokuapp.com/" className="btn btn-primary">Larry Ipsum</a>
  </div>
</div>

<div className="card col-4" >
  <div className="card-body">
    <h5 className="card-title">FreshPlatez</h5>
    <p className="card-text">E-commerce App for a Chef looking to prepare healthy meals and deliver them to a local gym.</p>
    <a href="https://rocky-lake-19266.herokuapp.com/" rel="noopener noreferrer" target="_blank"
    className="btn btn-primary">Fresh Platez</a>
  </div>
</div>
</div>
</div>
</div>


    );
}