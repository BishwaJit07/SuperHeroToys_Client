
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useContext } from "react";
  import {SiGoogle } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
  import { AuthContext } from '../../Provider/Authprovider';
import useTitle from "../hooks/useTitle";

const Login = () => {
  const {signIn,signInGoogle}= useContext(AuthContext);
  useTitle('SuperHeroToys-Login');
  const location = useLocation();
  const from = location.state?.from?.pathname  || '/';

  const navigate = useNavigate();
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
     
        const email = form.email.value;
        const password = form.pass.value;
        console.log( email, password);

       
    signIn(email ,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      navigate(from,{ replace: true })

        
      })
      .catch(error => console.log(error))

  }
  const handleGoogleLogin =()=>{
    signInGoogle()
    .then(result=>{
        const user= result.user;
        console.log(user);
        navigate(from ,{replace : true});
    })
    .catch(error=>{
        console.log(error.message);
        
    })
  }
    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-4">
        <div>
            <img src={"https://i.ibb.co/TWhKLdd/xjkg0ky4.png"} alt=""  className="rounded-xl"/>
        </div>
         <div className="p-4"><Card color="transparent" shadow={false}>
  <Typography variant="h4" color="white">
    Log in
  </Typography>
  <Typography color="gray" className="mt-1 font-normal text-white">
    Enter your details to LogIn.
  </Typography>
  <form onSubmit={handleLogIn} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div className="mb-4 flex flex-col gap-6 ">
     
      <Input size="lg" label="Email" name="email" className="text-white"/>
      <Input type="password" size="lg" label="Password" name="pass" className="text-white"/>
    </div>
  
    <Button type="submit" className="mt-6" fullWidth>
      Log In
    </Button>
    <div className='m-2 text-center text-white'>Or Sign In with</div>
  <div className='btn btn-ghost flex justify-center text-blue-300' onClick={handleGoogleLogin}> < SiGoogle/> </div>

    <Typography color="gray" className="mt-4 text-center font-normal text-white">
      Already have an account?{" "}
      <Link
        to="/signup"
        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
      >
        Sign In
      </Link>
    </Typography>
  </form>
</Card></div>
    </div>
    );
};

export default Login;