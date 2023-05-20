import  { useEffect } from 'react';
import AOS from "aos";

const ImgGallery = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div data-aos="fade-left"><h2 className='text-center text-2xl font-semibold text-white p-2 rounded-xl bg-gray-600 my-2'>Toy Gallery</h2>
            <div className="container mx-auto px-5 pt-4  lg:px-32 lg:pt-4">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://rukminim1.flixcart.com/image/416/416/jqe38280/action-figure/c/x/c/set-of-8-super-heroes-action-figure-for-kids-multicolor-authfort-original-imaf7bmzdzjgfr7r.jpeg?q=70" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://4.bp.blogspot.com/-s43k0kkOH-0/Ug45lcxp8_I/AAAAAAAALzk/XbYDFKNLZCQ/s1600/SHSc-3.jpg" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i0.wp.com/batman-news.com/wp-content/uploads/2022/08/McFarlane-Toys-Super-Powers-Wave-1-Featured-01.jpg?fit=3200%2C1800&quality=80&strip=info&ssl=1" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://img.tatacliq.com/images/i8/658Wx734H/MP000000014937960_658Wx734H_202210201528081.jpeg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ebayimg.com/images/g/Nk0AAOSwqbxhIegd/s-l225.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://m.media-amazon.com/images/I/91aTd-k35qL._AC_SL1500_.jpg" />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ImgGallery;