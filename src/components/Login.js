import React, { useState, useEffect  } from 'react';
import TaskList from './TaskList';
import { useNavigate } from 'react-router-dom'


function Login() {

    const history = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null);


    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem('user_record')) || [
            { username: 'user1', password: 'password1' },
            { username: 'user2', password: 'password2' },
            // Add more users as needed
          ]
    );
      

      const handleLogin = () => {
        // Iterate through the array of users
        for (const user of users) {
          if (username === user.username && password === user.password) {
            setIsLoggedIn(true);
            setCurrentUser(username);
            let userLogin = { username, password };
            localStorage.setItem('user_login', JSON.stringify(userLogin));
            
            // Redirect to a different route after successful login
            history('/Tasklist');
            
            return; // Exit the function if a match is found
          }
        }
      
        // If no matching user is found, show an alert
        alert('Invalid credentials');
      };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem('user_record', JSON.stringify(users));
    }, [users]);


    return (
        <div>
            {
            
            // isLoggedIn ? (
            //     <div>
            //         <h2>Welcome, {currentUser}</h2>
            //         <button onClick={handleLogout}>Logout</button>
            //         <TaskList currentUser={currentUser} />
            //         {/* Your task list and secure routes go here */}
            //     </div>
            // ) : 
            (
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}

export default Login;
