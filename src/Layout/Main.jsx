
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer';
import NavBar from '../Component/Shared/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar/>
           <div  className=' max-w-7xl mx-auto'> <Outlet/></div>
            <Footer/>
        </div>
    );
};

export default Main;