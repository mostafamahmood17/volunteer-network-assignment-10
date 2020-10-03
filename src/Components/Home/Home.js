import React, { useContext } from 'react';
import { OrganizationContext } from '../../App';
import Nav from '../Nav/Nav';
import Organization from '../Organization/Organization';

const Home = () => {
    const [org, setOrg] = useContext(OrganizationContext);
    console.log(org)
    
   
    return (
        <div>
            <Nav></Nav>
            
            {
                org.map(orgs => <Organization orgs={orgs} key={orgs.id}></Organization>)     
            }
        </div>
    );
};

export default Home;