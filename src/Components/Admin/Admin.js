import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OrganizationContext } from '../../App';
import logo from "../../logos/Group1329.png";
import plus from "../../logos/plus 1.png";
import icon from "../../logos/users-alt 1.png"
import UserList from '../UserList/UserList';

const Admin = () => {
    const [allUser, setAllUser] = useState([]);
    const [newList, setNewList] = useState([]);
    const [org, setOrg, loggedInUser, setLoggedInUser] = useContext(OrganizationContext)
    useEffect(() => {
        fetch('http://localhost:5000/admin')
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [])
    
    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(result => {
            const newList = allUser.filter(u => u.id !== id)
            setNewList(newList)
            console.log(result)

         })
    }

    return (
     <div className="container mt-2">
        <div className="row">
        <div className="col-lg-4 col-sm-12">
              <div>
                  <Link to='/'><img src={logo} width="120px" height="50px" alt=""/></Link>
                  <br/>
                  <Link to='/admin'><p className="wordWrap mt-3"><img src={icon} alt="" width="20px" height="20px"/> Volunter register list</p></Link>
                  <Link to='/orgcreate'><h4><img src={plus} alt="" width="20px" height="20px"/> Add event</h4></Link>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
            {
            allUser && allUser.map(user=><UserList deleteProduct={deleteProduct} key={user._id} user={user}></UserList>)
            }
            </div>
            
        </div>
    </div>
    );
};

export default Admin;