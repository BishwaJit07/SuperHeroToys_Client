import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import swal from "sweetalert";
import useTitle from "../hooks/useTitle";

 
export default function UpdateToy(props) {
  const [size, setSize] = useState(null);
   
  const {toy,toys,setToys,user} = props;
  useTitle('SuperHeroToys-UpdateToys')
  
  const handleOpen = (value) => setSize(value);

  const [toyData, setToyData] = useState({
       
    sellerName: user.displayName,
    sellerEmail: user?.email,
      price: toy.price,
      _id : toy._id,
      available_quantity: toy.available_quantity,
      description: toy.description,
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
    console.log(toyData);
  
    fetch(`https://super-hero-toy-server.vercel.app/mytoys/${toyData._id}`, {
      method: 'PATCH', // or 'PUT' depending on your server API
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
  
        if (data.modifiedCount > 0) {
          // Handle successful update
          const remainingToys = toys.filter((t) => t._id !== toyData._id);
          const updatedToy = { ...toyData };
          setToyData(updatedToy);
          setToys([...remainingToys, updatedToy]);
          swal("Toy Updated!", "Good Job..", "success")
        }
      })
      .catch((error) => {
        console.error(error);
     
      });
  };


  return (
    <Fragment>
      <div className="mb-3 flex gap-3">
        
        <Button onClick={() => handleOpen("sm")} variant="gradient">
          Edit
        </Button>
       
      </div>
      
      <Dialog
        open={
                  size === "sm" 

        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
        <form className="max-w-md mx-auto flex flex-col" onSubmit={handleSubmit}>
  <div className="mb-4">
    <label htmlFor="price" className="block font-medium text-blue-800">
      Price
    </label>
    <input
      required
      type="number"
      id="price"
      name="price"
      value={toyData.price}
      onChange={handleInputChange}
      className="mt-1 p-2 border border-gray-300 rounded-md w-full text-white"
      placeholder="Enter price"
    />
    <input
     
     defaultValue={toyData._id}
     
      className="hidden"
     
    />
  </div>

  <div className="mb-4">
    <label htmlFor="available_quantity" className="block font-medium text-blue-800">
      Available Quantity
    </label>
    <input
      required
      type="number"
      id="available_quantity"
      name="available_quantity"
      value={toyData.available_quantity}
      onChange={handleInputChange}
      className="mt-1 p-2 border border-gray-300 rounded-md w-full text-white"
      placeholder="Enter available quantity"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="description" className="block font-medium text-blue-800">
      Detail Description
    </label>
    <textarea
      id="description"
      name="description"
      value={toyData.description}
      onChange={handleInputChange}
      className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32 resize-none text-white"
      placeholder="Enter detail description"
    />
  </div>

  <button
    type="submit"
    className="px-4 py-2 bg-blue-500 self-center  text-white rounded-md hover:bg-blue-600"
  >
    Submit
  </button>
</form>
        </DialogBody>
        <DialogFooter>
         
          <Button
          type="submit"
            variant="gradient"
            color="red"
            onClick={() => handleOpen(null)}
          >
            <span>close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}