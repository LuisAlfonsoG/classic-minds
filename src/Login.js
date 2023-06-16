
import React from 'react';

function Login({expired}) {
    
    return (
        <div className="Login-page">
            <div id="login-page-background">
                <div className='background-image'></div>
                <div className='background-gradient'></div>
            </div>
            <header className="Login-page-main">
                <div className='classic-minds-app-logo'>
                    <img src='classicminds-app-logo-white.png' />
                    <h1>Classic Minds</h1>
                </div>
                <p>Experience the Timeless Sounds of Classical Music</p>
                <div className='login-btn'> 
                    <a className="btn-spotify" href="/auth/login" >
                        <button>Login with Spotify</button> 
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Login;
