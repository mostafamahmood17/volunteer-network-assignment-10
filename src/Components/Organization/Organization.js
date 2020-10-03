import React from 'react';
import { Link } from 'react-router-dom';



const Organization = (props) => {
    const {name, image, id, color} = props.orgs;
    

    
    return (
       
        <div className="container">
            <Link to={`/register/${id}`}>
             <div className="float-left">
                 <div className="m-2"> 
                     <img style={{width: "15rem"}} src={image} alt=""/>
                     <p className="text-center text-light" style={{borderRadius: "5px", border: "1px", backgroundColor:`${color}`, width: "15rem", height:"50px"}}>{name}</p>
                 </div>
             </div>
             </Link>
         </div>
    )
};

export default Organization;