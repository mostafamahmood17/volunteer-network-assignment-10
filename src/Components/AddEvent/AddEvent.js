import React from 'react';



const AddEvent = () => {
    // to create organization database at frist
    const handleAddOrganization = () =>{
       
        fetch('https://morning-coast-77135.herokuapp.com/addOrganization', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify()
        })
        
    }
    return (
        <div>
            <button onClick={handleAddOrganization}>Add product</button>
        </div>
    );
};

export default AddEvent;