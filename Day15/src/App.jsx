import React, { useState } from 'react'
import Card from './Card'
import './App.css'

const AppForm = () => {
  // let name = "Ishanvi";
  // const [monitor, remote] = useState("Ishanvi");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const initialState = {
    name: "",
    email: "",
    password: ""
  };
  
  const [credentials, setCredentials] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // console.log("re-rendered",monitor);

  // const handleChange = (e) => {
    // name = e.target.value;
    // e.target.style.background = "purple";
    // console.log(name);
  //   remote(e.target.value.toUpperCase());
  //   console.log("Updated",monitor);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Hide the form, show the card
  };

  return (
    // <div className = "app">
    //   <div className="card">
    //     <Card title="Card 1" desc="Card Description" />
    //     <Card title="Card 2" desc="Card Description" />
    //   </div>
    //   <div className='form'>
    //     <h1>Name</h1>
    //     <input value = {monitor} type="text" placeholder='Please enter here.......' onChange={handleChange}/>
    //     <h3>Hello {monitor} !</h3>
    //   </div>
    // </div>
    <div className="icard-details">
       {!isSubmitted ? (
          <form className="form" onSubmit={handleSubmit}>
            <h1>Form</h1>
            <input
              type="text"
              name="name"
              value={credentials.name}
              placeholder="Enter your name..."
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={credentials.email}
              placeholder="Enter your email..."
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              value={credentials.password}
              placeholder="Enter your password..."
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        ) : 
        (
          <div className="idCard">
            <h1>Id Card</h1>
            <h3>Name: {credentials.name}</h3>
            <h3>Email: {credentials.email}</h3>
          </div>
        )}
    </div>
  )
}

export default AppForm;