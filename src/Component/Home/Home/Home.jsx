
import useTitle from '../../hooks/useTitle';
import Animation from '../HomeCompo/Animation';
import Banner from '../HomeCompo/Banner';
import ImgGallery from '../HomeCompo/ImgGallery';
import OurService from '../HomeCompo/OurService';
import Popular from '../HomeCompo/popular';
import ToysCard from '../HomeCompo/ToysCard';

const Home = () => {
    useTitle('SuperHeroToys-Home');
    return (
        <div>
          <Banner/>

          <Popular/>
      
         <OurService/>
         <ToysCard/>
         <Animation/>
         <ImgGallery/>
        </div>
    );
};

export default Home;