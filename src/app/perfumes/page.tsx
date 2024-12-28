import React from 'react';

const Perfumes = () => {
  const perfumeData = [
    { id: 1, name: 'bvlgari', price: 12000, description: 'Luxury perfume', image: '/bvlgari.png' },
    { id: 2, name: 'ladymillion', price: 8000, description: 'Sporty design', image: '/ladymillion.png' },
    { id: 3, name: 'swissmiss', price: 25000, description: 'Elegant timepiece', image: '/swissmiss.jpg' },
    { id: 4, name: 'dolce', price: 5000, description: 'Sporty and stylish', image: '/dolce.jpg' },
    { id: 5, name: 'medorona', price: 7000, description: 'Bold and rugged', image: '/medorona.png' },
    { id: 6, name: 'dior', price: 1000, description: 'Affordable and reliable', image: '/dior.jpg' },
  ];

  return (
    <div>
      <div className="perfumes">
        {perfumeData.map((perfume) => (
          <div key={perfume.id} className="perfume-card">
            <img src={perfume.image} alt={perfume.name} />
            <h3>{perfume.name}</h3>
            <p>{perfume.description}</p>
            <div className="price">${perfume.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perfumes;