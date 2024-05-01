import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'; // Importer useHistory depuis react-router-dom
import { Facebook, Mail, Instagram } from 'react-feather'; // Importer les icônes de Feather Icons
import './login.css';

function Login() {
  const history = useHistory(); // Utiliser useHistory pour obtenir l'objet history

  const handleLogin = () => {
    // Logique de connexion...

    // Naviguer vers la nouvelle page
    history.push('/app');
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1>Welcome Back</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="checkbox" id="keepLoggedIn" />
            <label htmlFor="keepLoggedIn">Keep me logged in</label>
          </div>
          <button type="submit">Log in</button>
        </form>
        <p>Don&apos;t have an account? <a href="#">Sign up here</a></p>
        {/* Ajouter des boutons avec des icônes pour se connecter avec Facebook, Gmail et Instagram */}
        <div className="social-login">
          <button onClick={() => history.push('/facebook-login')}>
            <Facebook />
          </button>
          <button onClick={() => history.push('/gmail-login')}>
            <Mail />
          </button>
          <button onClick={() => history.push('/instagram-login')}>
            <Instagram />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
