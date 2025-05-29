import React from 'react';
import backgroundImage from './assets/login-bg.png';

function Rectangle() {
    return (
        <div className="container">
        <div className="left-section">
            <div className="text-wrapper">
            <h1>
                <div className="welcome-text">Selamat Datang</div>
                <div className="portal-text">di <span className="highlight">Student Portal</span></div>
            </h1>
            </div>
        </div>

        <div className="right-section">
            <div className="login-box">
            <h1 className="login-title">Login Student Portal</h1>
            <div className="inputs">
                <label className="input-label">ID Pengguna</label>
                <input type="text" placeholder="Username" className="username-input" />
                <label className="input-label password">Password</label>
                <input type="password" placeholder="Password" className="password-input" />
            </div>
            <div className="form-extras">
                <div className="remember-forgot">
                <label className="remember-label">
                    <input type="checkbox" className="checkbox" />
                    Remember me
                </label>
                <a href="#" className="forgot-password">Lupa Kata Sandi?</a>
                </div>
                <button className="login-button">Masuk</button>
                <div className="version-label">Versi 20250411.2</div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Rectangle;
