import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import  { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";
import AOS from "aos";

const ToysCard = () => {
    const [toys,setToys]= useState([]);
    useEffect(
        ()=>{
            fetch('https://super-hero-toy-server.vercel.app/toys')
            .then(res=> res.json())
            .then(data=>{
                setToys(data);
            })
        }
    )
    useEffect(() => {
      AOS.init();
    }, []);
    return (
        <div className='text-center p-2' >

       <h2 className='text-center text-2xl font-semibold text-white p-2 rounded-xl bg-gray-600 my-2'>Chekout Our Products</h2>

                  <div>
                        
              <div className='flex justify-center w-'>
              <Tabs>
              <TabList className="flex justify-center py-2">
  <Tab className="text-white font-medium text-xl px-4 py-2 bg-blue-500 rounded-md">DC</Tab>
  <Tab className="text-white font-medium text-xl px-4 py-2 bg-blue-500 mx-4 rounded-md">Marvel</Tab>
  <Tab className="text-white font-medium text-xl px-4 py-2 bg-blue-500 rounded-md">Under $20</Tab>
</TabList>


<TabPanel>
  <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4" data-aos="fade-down">
    {toys
      .filter(toy => toy.sub_category === "DC")
      
      .map(toy => (
        <div key={toy._id} className="grid-item">
          <div className="card w-96 h-5/6 bg-blue-gray-800 p-2 text-white">
            <figure className="px-10 pt-10">
              <img src={toy.picture_url} alt="Shoes" className="p-4 rounded-2xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{toy.name}</h2>
              <p>{toy.sub_category}</p>
              <div className='flex py-2'>
                <p className='mx-2 badge badge-warning badge-outline gap-2'>Rating {toy.rating}</p>
                <p className='badge badge-accent mx-2 text-white'>$ {toy.price} </p>
              </div>
              <div className="card-actions">
                <Link to={`/toys/${toy._id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</TabPanel>
<TabPanel>
  <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
    {toys
      .filter(toy => toy.sub_category === "Marvel")
     
      .map(toy => (
        <div key={toy._id} className="grid-item">
          <div className="card w-96 h-5/6 bg-blue-gray-800 text-white">
            <figure className="px-10 pt-10">
              <img src={toy.picture_url} alt="Shoes" className="p-4 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{toy.name}</h2>
              <p>{toy.sub_category}</p>
              <div className='flex py-2'>
                <p className='mx-2 badge badge-warning badge-outline gap-2'>Rating {toy.rating}</p>
                <p className='badge badge-accent mx-2 text-white'>$ {toy.price} </p>
              </div>
              <div className="card-actions">
              <Link to={`/toys/${toy._id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</TabPanel>

<TabPanel>
  <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
    {toys
      .filter(toy => toy.price < 20)
     
      .map(toy => (
        <div key={toy._id} className="grid-item">
          <div className="card w-96 bg-blue-gray-800 h-5/6 text-white">
            <figure className="px-10 pt-10">
              <img src={toy.picture_url} alt="Shoes" className="p-4 rounded-2xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{toy.name}</h2>
              <p>{toy.sub_category}</p>
              <div className='flex py-2'>
                <p className='mx-2 badge badge-warning badge-outline gap-2'>Rating {toy.rating}</p>
                <p className='badge badge-accent mx-2 text-white'>$ {toy.price} </p>
              </div>
              <div className="card-actions">
              <Link to={`/toys/${toy._id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</TabPanel>

    
  </Tabs>
              </div>
                            
                  </div>
        </div>
    );
};

export default ToysCard;