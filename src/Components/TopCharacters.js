import React from 'react';
import img1 from '../Website_Assignment/pic2.png'
import img2 from '../Website_Assignment/pic1.png'
import img3 from '../Website_Assignment/pic_2.png'
const TopCharacters = () => {
    return (
        <div className='mb-20'>
        <h1 class="text-5xl text-white text-center font-extrabold font-sans mb-10 mt-20">Top Characters</h1>
           <div className='grid grid-cols-3 gap-4 ml-10 mr-10'>
           <div class="card bg-indigo-600  shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img1} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title font-bold">Luna Bella</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn  btn-link text-black">Load more ></button>
    </div>
  </div>
</div>
<div class="card bg-indigo-600  shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img2} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title font-bold">Leo Charlie</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn  btn-link text-black">Load more ></button>
    </div>
  </div>
</div>
<div class="card bg-indigo-600 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img3} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title font-bold">Lucy Oliver</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn  btn-link text-black">Load more ></button>
    </div>
  </div>
</div>
           </div> 
        </div>
    );
};

export default TopCharacters;

