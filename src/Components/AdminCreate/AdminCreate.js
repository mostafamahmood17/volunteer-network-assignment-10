import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logos/Group1329.png";
import plus from "../../logos/plus 1.png";
import icon from "../../logos/users-alt 1.png"

const AdminCreate = () => {
    const [count, setCount] = useState(31);
    const [selectedDate, setSelectedDate] = useState({
        newDate : new Date()
    })

    const handleDate = (e) =>{
        const {name, value} = e.target;
        if(name === "date"){
            setSelectedDate(value)
        }
    }  


    const submitHandler = (e) =>{
        e.preventDefault();
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const date = document.getElementById("date").value;
        const image = document.getElementById("image").value;
        const color = document.getElementById("color").value;
        const id = document.getElementById("id").value;
       
        const info = {description, name, date, image, color, id};
        
        fetch('http://localhost:5000/addOrganization', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        })
    .then(res =>res.json())
    .then(data => {
        console.log(data);
        alert("Event Created");
    })

}

   

    const inputStyle = { 
        height:"120px",
        width:"180px",
        wordBreak: "breakWord"
    }

    return (
        // admin panel organization create component
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div>
                        <Link to="/"><img src={logo} width="120px" height="50px" alt="" /></Link>
                        <br />
                        <Link to='/admin'><p className="wordWrap mt-3"><img src={icon} alt="" width="20px" height="20px" /> Volunter register list</p></Link>
                        <Link to='/orgcreate'><h4><img src={plus} alt="" width="20px" height="20px" /> Add event</h4></Link>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <h1>Add Event</h1>
                    <form onSubmit={submitHandler}>
                       <div className="row">
                        <div className="col">
                            <div className="col-6">
                              <h4>Event Title</h4>
                              <input type="text" id ="name" placeholder="Title" name="name"/>
                            </div>
                            <div className="col-6">
                            <h3>Description</h3>
                            <input style={inputStyle} type="text" id ="description" placeholder="Description" name="description"/>
                            </div>
                        </div>

                        <div className="col">
                          <div className="col-4">
                            <h4>Event Date</h4>
                            <input type="date" format="MM/dd/yyyy" onChange={handleDate} name="date" id="date"/>
                            </div>
                            
                            <div className="col-4">
                            <h3>Banner</h3>
                            <input type="file"/>
                            </div>
                            <input className="d-none" id ="image" type="text" defaultValue="https://imgur.com/pevdHU6.png" name="image"/>
                            <input className="d-none" id ="color" type="text" defaultValue="orange" name="color"/>
                            <input className="d-none" id ="id" type="text" defaultValue={count + Math.floor(Math.random() * 100)} name="id"/>
                        </div>
                          <div className="m-3 col-md-12">
                              <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>


                </div>

            </div>
        </div>
    );
};

export default AdminCreate;
