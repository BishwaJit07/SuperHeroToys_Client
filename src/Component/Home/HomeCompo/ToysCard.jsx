import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

const ToysCard = () => {
    const [toys,setToys]= useState([]);
    useEffect(
        ()=>{
            fetch('http://localhost:5000/toys')
            .then(res=> res.json())
            .then(data=>{
                setToys(data);
            })
        }
    )
    return (
        <div className='text-center'>
       
            <h2>ChekOut Our Toys</h2>
                  <div>
                        
                                  <Tabs>
    <TabList>
      <Tab>DC</Tab>
      <Tab>Marvel</Tab>
    </TabList>

    <TabPanel>
    {toys.map(toy => {
      if (toy.sub_category === "DC") {
        return (
          <div key={toy._id}>
             <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={toy.picture_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{toy.name}</h2>
    <p>{toy.sub_category}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          </div>
        );
      }
      return null;
    })}
  </TabPanel>
    <TabPanel>
    {toys.map(toy => {
      if (toy.sub_category === "Marvel") {
        return (
          <div key={toy._id}>
           <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={toy.picture_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{toy.name}</h2>
    <p>{toy.sub_category}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          </div>
        );
      }
      return null;
    })}
  </TabPanel>
    
  </Tabs>
                            
                  </div>

        </div>
    );
};

export default ToysCard;