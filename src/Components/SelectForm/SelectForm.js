import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { OrganizationContext } from '../../App';
import logo from '../../logos/Group1329.png'

const SelectForm = () => {
    const history = useHistory();
    const [org, setOrg, loggedInUser, setLoggedInUser] = useContext(OrganizationContext);
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
        const userName = document.getElementById("userName").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const orgName = document.getElementById("orgName").value;
        const id = document.getElementById("id").value;
        const image = document.getElementById("image").value;

        const info = {userName, email, date, orgName, id, image};
        
        fetch('https://morning-coast-77135.herokuapp.com/addorg',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(info)
    })
    .then(res =>res.json())
    .then(data => {
        console.log(data);
        history.push('/contributions');

    })

}

    
    const {id} = useParams();

    useEffect(()  => {
        const selectedOrganization = org.find(orgs => orgs.id == id)
        setOrg(selectedOrganization)
    },[])

    const logInStyle = {
        textAlign: "center",
        backgroundColor: "#fff",
        height: "500px",
        padding: "10%",
        border: "1px solid black",
        wordWrap: "wrap",
        overflow: "hidden",
        borderRadius: "5px",
        position:"absolute",
        left:"20%",
        right:"20%",
        top:"30%"
    };
    const imageStyle={
         width:"300px",
         height:"100px",
         marginTop:"20px"
        
    }

    const backgroundStyle={
        backgroundColor:"#E5E5E5",
        width:"100%",
        height:"100vh",
        display : "relative",
        
    }
    
    return (
        <div  style={backgroundStyle} >
        <div className="text-center">
        <img style={imageStyle} src={logo} alt=""/>
        </div>
     
    <div className="d-flex justify-content-center align-item-center" style={logInStyle}>
        <div className="col-md-6" >
            <form onSubmit={submitHandler}>
                <h3>Register as a Volunter</h3>
                <input id="userName" type="text" defaultValue={loggedInUser.name} name="userName"/>
                <br/>
                <input id="email" type="email" defaultValue={loggedInUser.email} name="email"/>
                <br/>
                <input id="date" type="date" format="MM/dd/yyyy" onChange={handleDate} name="date"/>
                <br/>
                <input id="orgName" type="text" defaultValue={org && org.name} name="orgName"/>
                <input className="d-none" id ="id" type="text" defaultValue={org && org.id} name="id"/>
                <input className="d-none" id ="image" type="text" defaultValue={org && org.image} name="image"/>
                
                <br/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    </div>
    </div>
    );
};

export default SelectForm;
