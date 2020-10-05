import React, { useContext, useEffect } from 'react';
import { OrganizationContext } from '../../App';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import Organization from '../Organization/Organization';

const Home = () => {
    
    const [org, setOrg, loggedInUser, setLoggedInUser] = useContext(OrganizationContext);
     
    useEffect(() => {
        // front page
        fetch('https://morning-coast-77135.herokuapp.com/organizations')
          .then(res => res.json())
          .then(data => setOrg(data))
      }, [])
    return (
        <div>
          
            <Nav></Nav>
            <Banner></Banner>
            <div className="row ml-3">
           {(org.length > 0) && 
            org.map(orgs => <Organization orgs={orgs} key={orgs.id}></Organization>)     
            }
           </div>
           
        </div>
    );
};

export default Home;