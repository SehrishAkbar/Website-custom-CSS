import React from 'react';

const About = () => {
  return (
    <div>
      <section className="about" style={{ backgroundImage: "url('about-us.png')" }}>
        <div className="about-content">
          <h2 className="fade-in">About Us</h2>
          <h2 className="fade-in">Welcome to My Perfume Shop</h2>
          <p>Your ultimate destination for experiencing luxury fragrances without the hefty price tag. Founded by two passionate entrepreneurs, our journey began with a simple yet profound mission: to democratize the world of designer scents, making them accessible to everyone.</p>
        </div>
      </section>
    </div>
  );
};

export default About;