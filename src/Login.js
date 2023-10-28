import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 30px;
  
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <LoginContainer className="bg-neutral-800">
      <Form className=" bg-green-700 md:w-1/2 md:h-2/3 sm:w-2/3 sm:h-2/3 pl-8 w-3/4 h-3/4 pr-8 rounded-3xl ">
        <h2 className="text-4xl mb-6 mt-4 text-stone-900 font-extrabold">Sign In Here</h2>
       
        
        <Input className="bg-green-200 placeholder:text-stone-800 text-stone-800 font-bold hover:shadow-2xl shadow-emerald-100 shadow-md md:w-2/3 w-3/4" type="text" placeholder="Username" required/>
        <Input className="bg-green-200 placeholder:text-stone-800 text-stone-800 font-bold hover:shadow-2xl shadow-emerald-100 shadow-md md:w-2/3 w-3/4" type="password" placeholder="Password"  required/>
        <div  >
        
        <a href="#"className="mr-6 md:mr-8 lg:mr-10  font-extrabold ">Forgot Password?</a>
        <label for="remember" className='ml-6 md:ml-8 lg:ml-10'>
            <input type="checkbox" id="remember" />
            Remember Me
          </label>
        </div>
        
        <Button className="bg-rose-600 mt-9 text-xl shadow-red-300 shadow-md hover:shadow-md ">Login</Button>
        <p className="mt-2"> New user? Create an account <a href="#" className="font-mono font-extrabold text-yellow-400 ">Register</a> </p>
      </Form>
    </LoginContainer>
    
  );
  
};

export default Login;
