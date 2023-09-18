import { Link } from 'react-router-dom';

import { Logo, FormRow } from '../components';
import Wrapper from '../styles/styled/Login.styled';

const Login = () => {
  return (
    <Wrapper className='full-page'>
      <form className='form'>
        <Logo />
        {/* name field */}
        
        {/* email field */}
        
        {/* password field */}
        
        <button type='submit' className='btn btn-block'>
        {/* Loading */}
        </button>
        <Link to='/' className='btn btn-block btn-light mt'>
          Back
        </Link>
      </form>
    </Wrapper>
  );
};

export default Login;