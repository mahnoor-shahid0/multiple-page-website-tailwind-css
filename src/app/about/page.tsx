import React from 'react'

const page = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" style={{backgroundImage: "url('/aboutbackground.jpg')"}}> 
     <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
        <p>Welcome to WristWonders, where we believe a watch is more than just
             an accessory it is a statement of style, precision, and craftsmanship.
             Our mission is to bring you a diverse selection of premium timepieces
             from around a globe, each chosen for its quality and unique design.
             whether you are a connoissuer or simply appreciate the beauty of a 
             well-made watch, we are here to help you find the perfect piece to 
             complement your personality and elevate your look</p>
     </div>
    </section>
  );
};

export default page
