
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useContext } from "react";
  import {SiGoogle } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
  import { AuthContext } from '../../Provider/Authprovider';

const Login = () => {
  const {signIn}= useContext(AuthContext);
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
    return (
        <div className="flex justify-center items-center">
        <div>
            <img src={"https://i.ibb.co/TWhKLdd/xjkg0ky4.png"} alt=""  />
        </div>
         <div className="p-4"><Card color="transparent" shadow={false}>
  <Typography variant="h4" color="blue-gray">
    Log in
  </Typography>
  <Typography color="gray" className="mt-1 font-normal">
    Enter your details to LogIn.
  </Typography>
  <form onSubmit={handleLogIn} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div className="mb-4 flex flex-col gap-6">
     
      <Input size="lg" label="Email" name="email"/>
      <Input type="password" size="lg" label="Password" name="pass"/>
    </div>
    <Checkbox
      label={
        (
          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-normal"
          >
            I agree the
            <a
              href="#"
              className="font-medium transition-colors hover:text-blue-500"
            >
              &nbsp;Terms and Conditions
            </a>
          </Typography>
        )
      }
      containerProps={{ className: "-ml-2.5" }}
    />
    <Button type="submit" className="mt-6" fullWidth>
      Log In
    </Button>
    <p className='m-2 text-center'>Or Sign In with</p>
  <div className='flex justify-center '> <SiGoogle/> </div>

    <Typography color="gray" className="mt-4 text-center font-normal">
      Already have an account?{" "}
      <a
        href="#"
        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
      >
        Sign In
      </a>
    </Typography>
  </form>
</Card></div>
    </div>
    );
};

export default Login;