import './AdminLoginPage-module.css';
import { useState, setState, use } from 'react';

function AdminLoginPage({onLoginBypass, onLoginAttempt, url, recievedBearerToken}){

// post to {url + /api/Authentication} with the username and password
// recieve the {token} and set it as {recievedBearerToken}
// tell the App.jsx to set the state using that token

    const [usernameValue, setUsername] = useState("")
    const [passwordValue, setPassword] = useState("")
    //{"username":"admin@tsest.com","password":"admin@tsest.com"}

    const postCredentials = async () => {
        console.log(usernameValue)
        try {
            const response = await fetch(url+"api/Authentication", {
            method: "POST",
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"username":usernameValue, "password":passwordValue}),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            recievedBearerToken(result["token"])
            
            console.log("Token:", result["token"]);
            //window.location.reload();
        } catch (error) {
            //alertUser("CAR POST FAILED - Something went wrong...");
            console.error("Error posting car:", error);
        }
    };

    return(
       <div className="admin-page-body">
            <h1>Admin Login</h1>
            <input 
                id="admin-login-username"
                type="text"
                placeholder="username"
                onChange={e => setUsername(e.target.value)}
            />
            <input 
                id="admin-login-password"
                type="password"
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
            />
            <button 
                id="admin-login-button"
                onClick={()=> postCredentials()}>
                Sign in
            </button>
            <button 
                id="bypass"
                onClick={() => onLoginBypass()}>
                Bypass
            </button>
       </div> 
    );
}

export default AdminLoginPage;