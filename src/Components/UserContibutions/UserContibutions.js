import React, { useContext, useEffect, useState } from 'react';
import { OrganizationContext } from '../../App';
import Nav from '../Nav/Nav';

const UserContibutions = () => {
    const [userParticipation, setUserParticipation] = useState([])
    const [org, setOrg, loggedInUser, setLoggedInUser] = useContext(OrganizationContext);
 
       
    useEffect(() => {
        fetch('https://morning-coast-77135.herokuapp.com/userorg?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setUserParticipation(data))
    },[userParticipation])
    
    const deleteProduct = (id) => {
        fetch(`https://morning-coast-77135.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(result => {
            const newList=userParticipation.filter(u => u.id !== id)
            setUserParticipation(newList)
         })
    }


    return (
        <div>
            <Nav></Nav>
            <div className="row ">
            {userParticipation &&
            userParticipation.map( u =>
                 <div key = {u._id} className="card col-lg-4 col-md-6 col-sm-12 container" style={{width: "20rem"}}>
                     <div className="col">
                       <img className='' src={u.image} width="250px" height="150px" alt=""/>
                     </div>
                
                     <div className="card-body col">
                         <p className="card-text">{u.orgName}</p>
                     </div>
                     <button onClick={() => deleteProduct(`${u._id}`)} className="btn btn-danger">CANCEL</button>
                  </div>
                  
            )
            }
            </div>
           
            </div>
    );
};

export default UserContibutions;