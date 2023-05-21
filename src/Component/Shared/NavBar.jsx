import React, { useContext } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Avatar,
 
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
 
export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const {user,logOut} = useContext(AuthContext);

 

  const handleLogout = ()=>{
    logOut()
        .then()
        .catch(error=>
          console.log(error)
        )
  }
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/addtoy" className="flex items-center">
          Add A Toy
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/mytoys" className="flex items-center">
         My Toys
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/alltoys" className="flex items-center">
          All toys
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/blogs" className="flex items-center">
          Blogs
        </Link>
      </Typography>
     
     
           <div className='tooltip tooltip-bottom tooltip-warning ' data-tip={user && user.displayName }>
          { user?.photoURL &&    <Avatar src={user.photoURL} alt="avatar" withBorder={true} className="p-0.5" />}
          </div>


         
          
    </ul>
  );
 
  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 ">
        <div className="flex items-center justify-between text-blue-gray-900"><Link to='/' className="flex justify-center items-center">
        <img src={'https://i.ibb.co/7rmDhJg/20230520-181230-1-200x200-200.png'}  alt="" className="w-20 rounded-full"/>
          <Typography
          
            
            className="mr-4 cursor-pointer p-1.5  font-semibold"
          > 
           SuperHero Toys
          </Typography>
        </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div>  {  user ? <Button  onClick={handleLogout} className='mx-3 btn btn-primary '>LogOut</Button> : 
          <Link to='/login'><Button className='btn btn-primary'>LogIn</Button>
          </Link>}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div>  {  user ? <Button  onClick={handleLogout} className='mx-3 btn btn-primary '>LogOut</Button> : 
          <Link to='/login'><Button className='btn btn-primary'>LogIn</Button>
          </Link>}</div>
        </Collapse>
      </Navbar>
      
    </>
  );
}