
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Avatar,
  Input,
  IconButton,

  
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import swal from 'sweetalert';
import UpdateToy from "./UpdateToy";
import useTitle from "../hooks/useTitle";
 
const TABLE_HEAD = ["","ToyName", "Price", "Sub-category", "Available Quantity", "Seller", "Details"];
const MyToys = () => {
  useTitle('SuperHeroToys-MyToys')
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://super-hero-toy-server.vercel.app/mytoys/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setToys(data);
          });
      }, [user]);
  



  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const handleDeleteBtn = (id) => {
    swal({
      title: "Are you sure?",
      text: "Sure to delete this toy?",
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancel",
          value: null,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "Yes, delete it!",
          value: true,
          visible: true,
          className: "",
          closeModal: false,
        },
      },
      dangerMode: true,
    }).then((proceed) => {
      if (proceed) {
        fetch(`https://super-hero-toy-server.vercel.app/mytoys/${id}`, {
          method: 'DELETE'
        })
          .then(res => {
            if (!res.ok) {
              throw new Error("Failed to delete the toy.");
            }
            return res.json();
          })
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal("Deleted!", "Toy deleted successfully.", "success");
              const remaining = toys.filter(toy => toy._id !== id);
              setToys(remaining);
            } else {
              swal("Error", "Failed to delete the toy.", "error");
            }
          })
          .catch(error => {
            swal("Error", "Failed to delete the toy.", "error");
            console.error(error);
          });
      }
    });
  };

 
    return (
        <div>
           <Card className=" my-4">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="text-center">
            <Typography variant="h5" color="blue-gray">
            MY TOY's
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
             Edit or Remove your toys
            </Typography>
          
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />}  value={searchTerm}
          onChange={handleSearch}/>
            </div>
         
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0 bg-blue-gray-700 text-white">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-gray-800 p-4 ">
                  <Typography
                    variant="small"
                    color="yellow"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          {toys
 .filter((toy) => toy && toy.name && toy.name.toLowerCase().includes(searchTerm.toLowerCase()))
  // .slice(0, 20)
  .map((toy) => (
        <tbody key={toy._id}  >
          <td className="p-2 " onClick={()=>handleDeleteBtn(toy._id)}> <IconButton color="red" ><MdDeleteForever className="text-3xl"/>  </IconButton></td>
            <td className="p-4 text-xl font-semibold flex items-center"> <Avatar src={toy.picture_url} alt="avatar" size="lg" variant="rounded" withBorder={true} color="green" className="p-0.5" /><p className="pl-2" >{toy.name}</p></td>
            <td className="text-xl">${toy.price}</td>
            <td className="text-xl ">{toy.sub_category}</td>
            <td className="text-xl">{toy.available_quantity}</td>
            <td className="text-xl">{user && user.displayName|| toy.sellerName }</td>
            <td className="text-xl"><UpdateToy  user={user} toy={toy} toys={toys} setToys={setToys}/></td>
            
             </tbody>
      ))}
        </table>
      </CardBody>
     
  

    </Card>
   
        </div>
    );
};

export default MyToys;