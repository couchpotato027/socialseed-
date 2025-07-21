import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/sign-in');
  }, [navigate]);
  return null;
}

export default Login;
