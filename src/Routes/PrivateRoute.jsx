import { Progress } from '@material-tailwind/react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { useContext } from 'react';



const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext);


   const location = useLocation();

    if(loading){
        return <div className='flex justify-center items-center'>
            <Progress value={75} size="lg" label="Large" />
        </div>
   
}
    if(user?.email){
        
        return children;
    }


    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};


export default PrivateRoutes;