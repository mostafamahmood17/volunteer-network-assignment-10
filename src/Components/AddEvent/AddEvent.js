import React from 'react';

const AddEvent = () => {
    //not in use just to create organization database at frist
    const handleAddOrganization = () =>{
       
        fetch('http://localhost:5000/addOrganization', {
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