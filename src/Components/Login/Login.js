import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import firebaseConfig from './firebaseConfig';
import "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import { OrganizationContext } from '../../App';
import logo from '../../logos/Group1329.png';

const Login = () => {
    const [org, setOrg, loggedInUser, setLoggedInUser] = useContext(OrganizationContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    ;
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {

            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage)

        });
    }

    const logInStyle = {
        textAlign: "center",
        backgroundColor: "#fff",
        height: "500px",
        padding: "10%",
        border: "1px solid black",
        wordWrap: "wrap",
        overflow: "hidden",
        borderRadius: "5px",
        position:"absolute",
        left:"20%",
        right:"20%",
        top:"30%"
    };
    const imageStyle={
         width:"300px",
         height:"100px",
         marginTop:"20px"
        
    }

    const backgroundStyle={
        backgroundColor:"#E5E5E5",
        width:"100%",
        height:"100vh",
        display : "relative",
        
    }

    return (
        <div  style={backgroundStyle} >
            <div className="text-center">
            <img style={imageStyle} src={logo} alt=""/>
            </div>
         
        <div className="d-flex justify-content-center align-item-center" style={logInStyle}>
            <div className="col-md-6" >
                
                <div className="">
                    <h1>Login With</h1>
                </div>
                <div className="">
                    <div onClick={handleGoogleSignIn} className="btn btn-outline-dark" role="button" style={{ textTransform: "none" }}>
                        <img width="20px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                        Login with Google
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;