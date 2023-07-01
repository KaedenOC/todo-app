import React, { useEffect, useState } from 'react';
import testUsers from './lib/users';
import jwt_decode from 'jwt-decode';
import cookie from 'react-cookies'

export const AuthContext = React.createContext();

//provider for Auth//state
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  // useEffect for cookie
  useEffect(() => {
    let cookieToken = cookie.load('auth');
    _validateToken(cookieToken);
  }, [])

  //jwt decode//helper function taking in token
  const _validateToken = (token) => {
    try {
      
      //if token is valid, then we HAVE a user assigned to the validUser variable
      let validUser = jwt_decode(token);
      console.log(validUser);
      if(validUser){
        console.log(validUser);
        //save cookie
        cookie.save('auth', token);
        setUser(validUser);
        setIsLoggedIn(true);
        console.log('user logged in');
      }
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const login = (username, password) => {
    //grab username from testUsers object//variable coming in as a property we can use bracket notation//grabs specific username object
    let user = testUsers[username];
    //user.passowrd is based off our data and password is based off what someone keyed in
    if(user && user.password === password){
      try {
        //validate the token//user.token comes from the object
        _validateToken(user.token);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }
  };

  const logout = () => {
    //set our state back to the default state when logged out
    setUser({});
    setIsLoggedIn(false);
    cookie.remove('auth'); //remove cookie on logout
  };

  const can = (capability) => {
    return user?.capability?.includes(capability);
  };
  
  const values = {
    isLoggedIn,
    user,
    error,
    login,
    logout,
    can,
  };

  return(
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;