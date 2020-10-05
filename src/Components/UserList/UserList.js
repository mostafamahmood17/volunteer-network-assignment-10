import React from 'react';
import clear from '../../logos/trash-29.png'

const UserList = (props) => {
    // not in use dummi table component
    
    const {userName, email, date, _id, orgName} = props.user;
   
    
    return (
        <div>
                <h1>Volunter register list</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">registering date</th>
                            <th scope="col">Org Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    
                          
                    <tbody>
                       
                        
                        <tr>
                           <th scope="row">{userName}</th>
                            <td>{email}</td>
                            <td>{date}</td>
                            <td>{orgName}</td>
                            
                            <td><button onClick={()=>props.deleteProduct(_id)} className="btn btn-danger"><img src={clear} width="30px" height="20px" alt=""/></button></td>
    
                        </tr>
                       
                     
                    </tbody>
                     
                </table>
            </div>
    );
};

export default UserList;