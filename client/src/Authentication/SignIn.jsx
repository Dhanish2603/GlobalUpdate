import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      setIsLoggedIn(true);
      console.log(username);
      const user = await fetch("http://localhost:5000/signin", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (user.status != 200) {
        if (window.confirm("USER DIESNT ECISTS!..YOU WANT TO SINGUP PAGE"))
          window.location.href = "/signup";
      }

      const response = await user.json();
      console.log(response.token);
      signIn({
        token: response.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        // info of user generally id or username or email
        authState: { username: username },
      });

      if (response.token) {
        window.location.href="/technology";
      }
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div className="login-container">
      <h2>SignUp</h2>
      <form className="login-form" onSubmit={handleLogin} action="/">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
