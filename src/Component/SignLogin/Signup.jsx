import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useContext } from "react";
  import { SiGoogle } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import useTitle from "../hooks/useTitle";
  
const Signup = () => {
  const {createUser,signInGoogle} = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname  || '/';
  const navigate = useNavigate();
  useTitle('SuperHeroToys-SignUp');
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.pass.value;
        console.log(name, email, password,photo);

        createUser(email,password)
    .then((result) => {
     
      const user = result.user;
      console.log(user);
      
    })
    .catch((error) => {
      
      console.log(error);
    });
      };

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
        <div className="flex justify-center items-center">
          <div>
            <img src={"https://i.ibb.co/TWhKLdd/xjkg0ky4.png"} alt="" />
          </div>
          <div className="p-4">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" className="text-white">
                Sign Up
              </Typography>
              <Typography color="gray" className="mt-1 font-normal text-white">
                Enter your details to register.
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSignup}>
                <div className="mb-4 flex flex-col gap-6">
                  <Input size="lg" label="Name" name="name" className="text-white" />
                  <Input size="lg" label="photo url" name="photo" className="text-white"/>
              <Input size="lg" label="Email" name="email" className="text-white"/>
              <Input type="password" size="lg" label="Password" name="pass" className="text-white"/>

                </div>
                
                <Button type="submit"  className="mt-6" fullWidth>
                  Register
                </Button>
                <div className="m-2 text-center text-white">Or Sign In with</div>
                <div className='btn btn-ghost flex justify-center text-blue-300' onClick={handleGoogleLogin}> < SiGoogle/> </div>
                <Typography color="gray" className="mt-4 text-center font-normal text-white">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                  >
                    Log In
                  </Link>
                </Typography>
              </form>
            </Card>
          </div>
        </div>
      );
      
};

export default Signup;