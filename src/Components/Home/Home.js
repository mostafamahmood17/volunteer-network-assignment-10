import React, { useContext, useEffect, useState } from 'react';
import { OrganizationContext } from '../../App';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import Organization from '../Organization/Organization';

const Home = () => {

    const [search, setSearch] = useState('');

    const [org, setOrg, loggedInUser, setLoggedInUser] = useContext(OrganizationContext);

    const searchOrg = () => {
        const capture = document.getElementById('find').value;

        setSearch(capture)
        // console.log(event.target.value)

    }

    const inputField = {
        width: "300px",
        height: "36px",
        paddingBottom: "4px"
    }


    useEffect(() => {
        // front page
        fetch('https://morning-coast-77135.herokuapp.com/organizations?search=' + search)
            .then(res => res.json())
            .then(data => setOrg(data))
    }, [search])
    return (
        <div>

            <Nav></Nav>
            <Banner></Banner>
            <div className="d-flex justify-content-center">
                <input id="find" style={inputField} height="" type="text" />
                <button onClick={searchOrg} className="btn btn-primary">SEARCH</button>
            </div>
            {<h1>Lodding...</h1> &&

                <div className="row ml-3">

                    {org?.map(orgs => <Organization orgs={orgs} key={orgs.id}></Organization>)}

                </div>}

        </div>
    );
};

export default Home;