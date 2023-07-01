import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Auth';
import { Else, If, Then } from 'react-if';
import { Button, TextInput } from '@mantine/core';


function Login() {
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    logout();
    setUsername('');
    setPassword('');
  }

  return(
    <>
      <If condition={isLoggedIn}>
        <Then>
          <Button color='red' onClick={handleLogout}>Log Out</Button>
        </Then>
        <Else>
          <TextInput 
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput 
          placeholder='Password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          />
          <Button color='gray' onClick={() => login(username, password)}>Log In</Button>
        </Else>

      </If>
    </>
  )
}

export default Login;