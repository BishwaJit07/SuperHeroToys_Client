
import Animation from '../HomeCompo/Animation';
import Banner from '../HomeCompo/Banner';
import ImgGallery from '../HomeCompo/ImgGallery';
import Popular from '../HomeCompo/popular';
import ToysCard from '../HomeCompo/ToysCard';

const Home = () => {
    return (
        <div>
          <Banner/>

          <Popular/>
         <div >
         <img src="https://i.ibb.co/x3DNxqJ/Untitled-1800-x-200-px-2000x.jpg" alt="" className='p-4 rounded-3xl'/>
         </div>
         <ToysCard/>
         <Animation/>
         <ImgGallery/>
        </div>
    );
};

export default Home;