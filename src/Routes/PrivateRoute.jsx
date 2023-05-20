import { AuthContext } from '../Provider/Authprovider';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

 const PrivateRoutes = ({children}) => {
 const {user,loading} = useContext(AuthContext);
 const location = useLocation();



 if(loading){
     return <div className='flex justify-center items-center '>
           <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":80}}>80%</div>
        </div>}


    if(user?.email){
        return children;
    }
  


    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};



export default PrivateRoutes;