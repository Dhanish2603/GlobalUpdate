import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
const NavBar = () => {
  const signOut = useSignOut()
  const navigate = useNavigate()

  const logout = () => {
      signOut()
      navigate('/signin')
  }
  return (
    
    <div>
      <nav>
        <div className="logo">
          <h1>News Website</h1>
        </div>
        <div className="right">
        <Link to="/">Home</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/business">Business</Link>
        <Link to="/health">Health</Link>
        <Link to="/sports">Sports</Link>
        <button onClick={logout}>Logout</button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
