import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

 
export default function UpdateToy(props) {
  const [size, setSize] = useState(null);
   
  const {toy,toyData,handleInputChange, handleSubmit} = props;

  const handleOpen = (value) => setSize(value);


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
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
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
    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
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