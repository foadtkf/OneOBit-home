import React from 'react';
import banimg from '../Website_Assignment/pic4.png'
const GetFreeTrail = () => {
    return (
        <div class="hero min-h-screen ml-20 mr-20">
  <div class="hero-content grid lg:grid-cols-2 grid-cols-1">
    
    <div>
      <h1 class="text-5xl text-white font-extrabold font-sans">GET FREE TRAIL</h1>
      <p className='text-white'>There are many variations of passages of rearen many of cosum available but the majority have suffere.</p>
      <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs mt-5 mb-5" /><br/>
      <button class="btn btn-primary">Join us now</button>
      <button class="btn  btn-link text-white">Load more ></button>
    </div> 
    <img src={banimg} alt='' class="w-96" />
  </div>
</div>
    );
};

export default GetFreeTrail;