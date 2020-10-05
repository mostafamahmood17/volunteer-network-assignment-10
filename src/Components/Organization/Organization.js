import React  from 'react';
import { useHistory } from 'react-router-dom';




const Organization = (props) => {
    // new event create component
    const {name, image, id, color, description} = props.orgs;
    const history = useHistory()
    function handleClick(id) {
        history.push(`/register/${id}`);
      }
    
    return (
       <div className="col-lg-3 col-md-6 col-sm-12">
        <div onClick={()=>handleClick(id)}>
            
             <div >
                 <div className="m-2"> 
                     <img style={{width: "15rem"}} src={image} alt=""/>
                     <p className="text-center text-light" style={{borderRadius: "5px", border: "1px", backgroundColor:`${color}`, width: "15rem", height:"50px"}}>{name}</p>
                     {description && <p className="text-center text-light" style={{borderRadius: "5px", border: "1px", backgroundColor:`${color}`, width: "15rem", height:"50px"}}>Description: {description}</p>}
                 </div>
             </div>
         </div>
        </div>
    )
};

export default Organization;