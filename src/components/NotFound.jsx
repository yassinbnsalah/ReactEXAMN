import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
    return (
      <div>
        <h1>This page does not exist</h1>
        <p>Redirecting to the home page in 3 seconds...</p>
      </div>
    )
  }
  
  export default NotFound