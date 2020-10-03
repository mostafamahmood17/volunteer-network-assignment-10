import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OrganizationContext } from '../../App';

const SelectForm = () => {
    const [org, setOrg] = useContext(OrganizationContext)
    const {id} = useParams();
    useEffect(() => {
        const selectedOrganization = org.find(orgs => orgs.id == id)
        setOrg(selectedOrganization)
        console.log(selectedOrganization)

    },[id])
    
    return (
        <div>
            <h1>{org.name}</h1>
            
        </div>
    );
};

export default SelectForm;