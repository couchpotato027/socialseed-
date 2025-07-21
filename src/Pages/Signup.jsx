import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/sign-up');
  }, [navigate]);
  return null;
}

export default Signup;
