import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import useTitle from '../hooks/useTitle';

const CardDetails = () => {
  useTitle('SuperHeroToys-products')
    const toy = useLoaderData();
    const {user} = useContext(AuthContext);
    return (
        <div className='flex justify-center my-4'>
            
          <div className=" w-3/4 md:w-11/12 h-5/6 bg-blue-gray-800 p-2 text-whie">
          <div className="flex justify-center">
      <figure className="px-10 pt-10">
        <img src={toy.picture_url} alt="Shoes" className="rounded-2xl h-full w-full" />
      </figure>
    </div>
            <div className="card-body items-center text-center ">
              <h2 className="card-title text-white">{toy.name}</h2>
              <p>{toy.sub_category}</p>
              <div className='flex py-2'>
                <p className='mx-2 badge badge-warning badge-outline gap-2'>Rating {toy.rating}</p>
                <p className='badge badge-accent mx-2 text-white'>$ {toy.price} </p>
              </div>
              <div className="card-actions">
                <p>{toy.description}</p>
              </div>
              <div className='text-white'>
              {user?.displayName && <p>Seller: {user?.displayName}</p>}
              <p>Seller Email: {user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      
    );
};

export default CardDetails;