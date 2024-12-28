import React from 'react';
const Home = () => {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: "url('homepge.gif')" }}>
        <div>
          <h1 className="fade-in">Welcome to Perfume Shop</h1>
          <p>Your one-stop shop for the best perfumes</p>
          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;