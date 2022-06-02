import React from 'react';
import './Home.css';
import Image1 from '../Images/x.jpg';
import Image2 from '../Images/y.jpg';
import Image3 from '../Images/z.jpg';
const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">United Hospital</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Appointment</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* Carousale starts here--------------- */}
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Image1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Image2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Image3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
           
    )
};

export default Home;
