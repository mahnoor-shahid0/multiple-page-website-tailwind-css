import React from 'react'

const watches = () => {

    const watchData = [
      {id: 1, name: 'Casio', price: 26000, description: 'Luxury watch', image: '/casio.jpeg'},
      {id: 2, name: 'Rolex', price: 12000, description: 'Luxury design', image: '/rolex.jpg'},
      {id: 3, name: 'Omega', price: 8000, description: 'Sporty design', image: '/omega.jpg'},
      {id: 4, name: 'Benyar', price: 8000, description: 'High quality designer watch', image: '/benyar.webp'},
      {id: 5, name: 'Hugo Boss', price: 15000, description: 'Luxury craftsmanship', image: '/hugoboss.jpg'},
      {id: 6, name: 'Olevs', price: 9970, description: 'Timeless aesthetics', image: '/olevs.jpeg'},
    ];

  return (
    <div className="watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
        {watchData.map(watch => (
            <div key={watch.id} className="watch-card bg-white p-5 rounded-md shadow-md text-center">
                <img src={watch.image} alt={watch.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
                <h3 className="mt-4 text-2xl font-bold">{watch.name}</h3>
                <p className="text-gray-500">{watch.description}</p>
                <div className="price text-black text-xl font-semibold mt-2">${watch.price}</div>
                <button className="mt-4 px-4 py-2 bg-black hover:bg-neutral-900 text-white rounded-md">Add to Cart</button>
                </div>
        ))}
    </div>
  );
};

export default watches;
