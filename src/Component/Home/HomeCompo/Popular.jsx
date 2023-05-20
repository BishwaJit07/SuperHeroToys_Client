import { Typography } from '@material-tailwind/react';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';

const Popular = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
       <div data-aos="fade-up">
        <h2 className='text-center text-2xl font-semibold text-white p-2 rounded-xl bg-gray-600 my-2'>Hot Picks</h2>
         <div className='flex flex-col md:flex-row justify-between'>
              <div className="relative h-full w-full p-2 ">
        <img
          src="https://i.ibb.co/85qwJqk/io3wxt3t.png"
          alt="image 1"
          className="h-96 w-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 grid h-full w-full   place-items-center bg-black/50">
          <div className="w-3/4 text-center  md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl "
            >
              Captain Marvel Gets an <span className='text-warning'>AVENGERS</span>
            </Typography>
           
         
          </div>
          </div>
          </div>
              <div className="relative h-full w-full p-2">
        <img
          src="https://i.ibb.co/QH0vt5S/ag3wj552.png"
          alt="image 2"
          className="h-96 w-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 grid h-full w-full   place-items-center bg-black/50">
        <div className="w-3/4 text-center  md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl "
            >
             Random Customized <span className='text-warning'>All-In-One</span>
            </Typography>
           
         
          </div>

          </div>
          </div>
        </div>
       </div>
    );
};

export default Popular;