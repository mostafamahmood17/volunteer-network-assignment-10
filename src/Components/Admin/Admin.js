import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logos/Group1329.png";
import plus from "../../logos/plus 1.png";
import icon from "../../logos/users-alt 1.png"
import clear from '../../logos/trash-29.png'

const Admin = () => {
    // admin first page users display

    const [allUser, setAllUser] = useState([]);
    
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
                if(result){
                const newUser = allUser.filter(u => u._id !== id)
                setAllUser(newUser)
                console.log(allUser)
                }

            })
    }

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div>
                        <Link to='/'><img src={logo} width="120px" height="50px" alt="" /></Link>
                        <br />
                        <Link to='/admin'><p className="mt-3"><img src={icon} alt="" width="20px" height="20px" /> Volunter register list</p></Link>
                        <Link to='/orgcreate'><h4><img src={plus} alt="" width="20px" height="20px" /> Add event</h4></Link>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-12">

                    <table className="table table-white">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Registering Date</th>
                            <th scope="col">Organization Name</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                      { allUser && allUser.map (user => <tbody key={user._id}>
                            <tr>
                            <th scope="row">{user.userName}</th>
                            <td>{user.email}</td>
                            <td>{user.date}</td>
                            <td>{user.orgName}</td>
                            
                            <td><button onClick={()=>deleteProduct(user._id)} className="btn btn-danger"><img src={clear} width="30px" height="20px" alt=""/></button></td>
                            </tr>
                        </tbody>)}
                    </table>

                </div>

            </div>
        </div>
    );
};

export default Admin;