import { Button, Input, Textarea } from '@material-tailwind/react';
import React, { useState } from 'react';
import Select from 'react-select';



const options = [
    { value: 'DC', label: 'DC' },
    { value: 'Marvel', label: 'Marvel' },
    { value: 'Others', label: 'Others' },
  ];
  

const AddToys = () => {
  
    const [selectedOption, setSelectedOption] = useState(null);  
      
    return (
        <div>
            <div className="hero w-full h-full" style={{ backgroundImage: `url("https://i.ibb.co/hMH1bzp/5a3f7b09.jpg")`,backgroundSize: 'cover',width: '100%',
    height: '300px',  backgroundPosition: 'center',}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-gray-100">Add Your Toys</h1>
      <p className="mb-5 text-gray-300">FullFill the from and use Attractive img for BoostUp your sell.</p>
     
    </div>
  </div>
</div>

        <div className='flex flex-col justify-center items-center'>
             <div className='flex p-4 '> 
             <Input style={{ color: 'white' }} label="Picture URL " type="text" />
              <Input style={{ color: 'white' }} label="Product Name" className='ml-2' type="text" />
              </div>
             <div className='flex p-4'> 
             <Input style={{ color: 'white' }} label="Seller email " type="email" />
              <Input style={{ color: 'white' }} label="Seller name" className='ml-2' type="text"/>
              </div>
              <div className='flex justify-center items-center '>
              Category:
              <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
   
              </div>
             <div className='flex flex-col md:flex-row p-4'> 
             <Input style={{ color: 'white' }} label="Price " type="number" />
              <Input style={{ color: 'white' }} label="Rating" className='px-2' type="text"/>
              <Input style={{ color: 'white' }} label="Available quantity" className='' type="text"/>
              </div>
              <div className="w-11/12 flex justify-center ">
      <Textarea label="Message"
        style={{ color: 'white' }}
        className="text-white" />
    </div>
              <Button className='mt-4'>Add Toy</Button>
        </div>
        </div>
    );
};

export default AddToys;