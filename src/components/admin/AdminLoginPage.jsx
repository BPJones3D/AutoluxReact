import './AdminLoginPage-module.css';

function AdminLoginPage({onLoginBypass}){
    return(
       <div className="admin-page-body">
            <h1>Admin Login</h1>
            <input 
                id="admin-login-username"
                type="text"
                placeholder="username"
            />
            <input 
                id="admin-login-password"
                type="password"
                placeholder="password"
            />
            <button id="admin-login-button">Sign in</button>
            <button 
                id="bypass"
                onClick={() => onLoginBypass()}
            >
                Bypass
            </button>
       </div> 
    );
}

export default AdminLoginPage;