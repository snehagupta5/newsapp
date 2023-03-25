import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
 const[name , setName]=useState("");

function handleChange(event){
  setName(event.target.value);
}

  function Handleclick(e){
    props.setKeys(name);
    e.preventDefault();
    console.log(props.keys)
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid">
        <Link to="/about" className="navbar-brand" href="/">NewsApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to="/" className="nav-link" aria-current="page" >Home</Link></li>
            <li className="nav-item"><Link to="/Business" className="nav-link" >Business</Link> </li>
            <li className="nav-item"><Link to="/Entertainment" className="nav-link" >Entertainment</Link> </li>
            <li className="nav-item"><Link to="/General" className="nav-link" >General</Link> </li>
            <li className="nav-item"><Link to="/Health" className="nav-link" >Health</Link> </li>
            <li className="nav-item"><Link to="/Science" className="nav-link" >Science</Link> </li>
            <li className="nav-item"><Link to="/Sports" className="nav-link" >Sports</Link> </li>
            <li className="nav-item"><Link to="/Technology" className="nav-link" >Technology</Link> </li>
            <li className="nav-item"><Link to="/about" className="nav-link" >About</Link> </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={Handleclick} >
            <input className="form-control me-2" name="search" type="text" placeholder="Search" aria-label="Search" onChange={handleChange} value={name}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
