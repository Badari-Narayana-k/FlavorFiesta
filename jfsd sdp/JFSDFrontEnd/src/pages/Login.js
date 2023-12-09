import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { Button } from '@mui/material';

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2020/res/login', {
        username: user,
        password: password,
      });
  
      if (response.data === true) {
        // Assuming `navigate` is from `useNavigate` hook in React Router
        navigate('/resthome');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleLogInClick = () => {
    setIsLoginForm(true);
  };

  const handleSignUpClick = () => {
    setIsLoginForm(false);
  };

  return (
    <lbody>
    <div className="lcontainer">
      <div className="box"></div>
      <div className="lcontainer-forms">
        <div className="lcontainer-info">
          
          <div className="info-item">
            
          </div>
        </div>
        <div className="lcontainer-form">
          {isLoginForm ? (
            
            <div className="form-item log-in">
              <h1 style={{fontFamily:"sans-serif", fontWeight:"bold"}}>CUSTOMER LOGIN</h1>
              <div className="table">
                <div className="table-cell">
                  <input name="Username" placeholder="Username" type="text" />
                  <input name="Password" placeholder="Password" type="password" />
                  <br/><br/>
                  <a class="border-yellow-300">
                <Link
                  to="/viewres"
                  class="hover:shadow-xl transition-all p-2 px-4 bg-white rounded w-[fit-content] text-sm md:text-base font-bold border-yellow-300"
                >
                  Login
                </Link>
              </a>
              <br/><br/>
                  <p>From Restaurant?</p>
                <div className="lbtn" onClick={handleSignUpClick}>
                  Restaurant Login
                </div>
                </div>
                <br/>
                
              </div>
            </div>
          ) : (
            <div className="form-item sign-up">
              <h1 style={{fontFamily:"sans-serif", fontWeight:"bold"}}>RESTAURANT LOGIN</h1>
              <div className="table">
                <div className="table-cell" style={{margin:"2px"}}>
                  
                  <input name="user" placeholder="Username" type="text" value={user}
                  onChange={(e) => setUser(e.target.value)} />
                  <input name="password" placeholder="Password" type="password"value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                  <br/><br/>
                  <a class="border-yellow-300">
                <Button
                  onClick={handleSubmit}
                  class="hover:shadow-xl transition-all p-2 px-4 bg-white rounded w-[fit-content] text-sm md:text-base font-bold border-yellow-300"
                >
                  Login
                </Button>
              </a>
                  <br/><br/>
                  <p>Are You a Customer?</p>
                <div className="lbtn" onClick={handleLogInClick}>
                  Customer Login
                </div>
                </div>
                <br/>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </lbody>
  );
};

export default Login;
