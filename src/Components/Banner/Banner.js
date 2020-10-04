import React from 'react';

const Banner = () => {
    const inputField = {
        width:"300px",
        height:"36px",
        paddingBottom:"4px"
    }
    return (
        <div className="text-center">
            <div>
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
            </div>
            <div>
                <input style={inputField} height="" type="text"/>
                <button className="btn btn-primary">SEARCH</button>
            </div>
            
        </div>
    );
};

export default Banner;