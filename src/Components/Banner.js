import React from 'react';
import banimg from '../Website_Assignment/main_logo.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content grid lg:grid-cols-2 grid-cols-1">
    <img src={banimg} alt='' class="w-96" />
    <div><p className=' text-white font-bold'><img src="https://www.svgrepo.com/show/197763/dollar.svg" className='w-5 inline' alt="" />Play more earn more</p>
      <h1 class="text-7xl text-white font-extrabold font-sans">PLAY<br/>FOR<br/>EARN</h1><button class="btn btn-primary">Get Started</button>
      <button class="btn  btn-link text-white">Load more ></button>
    </div> 
  </div>
</div>
    );
};

export default Banner;