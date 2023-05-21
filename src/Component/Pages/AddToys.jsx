import { useContext } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../Provider/Authprovider';
import useTitle from '../hooks/useTitle';

const AddToys = () => {
    const {user} = useContext(AuthContext);
    useTitle('SuperHeroToys-AddToys');
  const [toyData, setToyData] = useState({
    picture_url: '',
    name: '',
    sellerName: user.displayName,
    sellerEmail: user?.email,
    sub_category: '',
    price: '',
    rating: '',
    available_quantity: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setToyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log(toyData);
    // Reset form after submission if needed
    setToyData({ 
      picture_url: '',
    name: '',
      sub_category: '',
      price: '',
      rating: '',
      available_quantity: '',
      description: '',
    });
    
    fetch('https://super-hero-toy-server.vercel.app/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toyData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        swal("Toy Added!", "Good Job..", "success")
      }
    })

  };

 
 

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


    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="picture_url" className="block font-medium text-gray-200">
          Picture URL of the toy
        </label>
        <input required 
          type="text"
          id="picture_url"
          name="picture_url"
          value={toyData.picture_url}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter picture URL"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block font-medium text-gray-200">
          Name
        </label>
        <input required
          type="text"
          id="name"
          name="name"
          value={toyData.name}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter toy name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="sellerName" className="block font-medium text-gray-200" defaultValue={user.displayname}>
          Seller Name
        </label>
        <input required
          type="text"
          id="sellerName"
          name="sellerName"
          value={toyData.sellerName}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter seller name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="sellerEmail" className="block font-medium text-gray-200">
          Seller Email
        </label>
        <input required
          type="email"
          id="sellerEmail"
          name="sellerEmail"
          value={toyData.sellerEmail}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter seller email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="sub_category" className="block font-medium text-gray-200">
          Sub-category
        </label>
        <select
          id="sub_category"
          name="sub_category"
          value={toyData.sub_category}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="">Select Sub-category</option>
          <option value="DC">DC</option>
          <option value="Marvel">Marvel</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="price" 
       
        className="block font-medium text-gray-200">
          Price
        </label>
        <input required
          type="number"
          id="price"
          
          name="price"
          value={toyData.price}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter price"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rating" className="block font-medium text-gray-200">
          Rating
        </label>
        <input required
          type="number"
          id="rating"
          name="rating"
          value={toyData.rating}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter rating"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="available_quantity" className="block font-medium text-gray-200">
          Available Quantity
        </label>
        <input required
          type="number"
          id="available_quantity"
          name="available_quantity"
          value={toyData.available_quantity}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter available quantity"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-medium text-gray-200">
          Detail Description
        </label>
        <textarea
          id="description"
          name="description"
          value={toyData.description}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32 resize-none"
          placeholder="Enter detail description"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default AddToys;
