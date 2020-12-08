import React, { useContext, useEffect, useState } from 'react';
import { OrganizationContext } from '../../App';
import Nav from '../Nav/Nav';

const UserContibutions = () => {
    // user participation component
    const [userParticipation, setUserParticipation] = useState([])
    const [org, setOrg, loggedInUser, setLoggedInUser] = useContext(OrganizationContext);


    useEffect(() => {
        fetch('http://localhost:5000/userorg?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setUserParticipation(data))
    }, [loggedInUser.email])
    
    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                const newList = userParticipation.filter(u => u._id !== id)
                console.log(userParticipation)
                setUserParticipation(newList)
                }
                
            })
    }


    return (
        <div>
            <Nav></Nav>
            <div className="row mr-5 ">
                {userParticipation &&
                    userParticipation.map(u =>
                        <div key={u._id} className="container col-md-5 border border-light rounded bg-light mb-2 ml-5" style={{ width: "20rem" }}>
                            <div className="row">
                                <div className="col">
                                    <img className='' src={u.image} width="250px" height="150px" alt="" />
                                </div>

                                <div className="col">
                                    <p className="card-text">{u.orgName}</p>
                                    <p className="card-text">{u.date}</p>
                                    <button onClick={() => deleteProduct(`${u._id}`)} className="btn btn-danger">CANCEL</button>
                                </div>

                            </div>

                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default UserContibutions;