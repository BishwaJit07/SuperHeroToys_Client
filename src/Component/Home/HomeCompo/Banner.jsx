import { Carousel, Typography, Button } from "@material-tailwind/react";

const Banner = () => {
  
    return (
        <div>
             <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/W2vV0Xb/Web-banner-all-mcfarlane-01-11zon-1-1600x.jpg"
          alt="image 1"
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full   place-items-center bg-black/50">
          <div className="w-3/4 text-center  md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              " Ignite Adventure and Heroic Tales with Our Superhero Toy Collection "
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Are you ready to embark on thrilling adventures and create epic tales of heroism? Look no further than our extraordinary collection of superhero toys! 
            </Typography>
         
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/DtL7JKF/Superhero-Category-Banner.png"
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full   place-items-center bg-black/50">
          <div className="w-3/4 text-center  md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              " Ignite Adventure and Heroic Tales with Our Superhero Toy Collection "
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Are you ready to embark on thrilling adventures and create epic tales of heroism? Look no further than our extraordinary collection of superhero toys! 
            </Typography>
         
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/VBmCHW1/maxresdefault.jpg"
          alt="image 3"
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full   place-items-center bg-black/50">
          <div className="w-3/4 text-center  md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              " Ignite Adventure and Heroic Tales with Our Superhero Toy Collection "
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Are you ready to embark on thrilling adventures and create epic tales of heroism? Look no further than our extraordinary collection of superhero toys! 
            </Typography>
         
          </div>
        </div>
      </div>
    </Carousel>
        </div>
    );
};

export default Banner;