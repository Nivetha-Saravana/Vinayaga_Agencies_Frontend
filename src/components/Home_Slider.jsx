import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import Service from './ServiceSection';
import Brand from './Brand';
import Home_smallcaro from './Home_smallcaro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shop from '../assets/Home images/shop.png';

const mockedProducts = [
  {
    _id: 1,
    video: 'https://player.vimeo.com/progressive_redirect/playback/365178959/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=ecd62a253caa72ad26e79e9bdcb3843dc4af3595c8329e2df997eefe0b72125c',
    text: 'Bringing light and power to your world, one switch at a time.',
    textAlign: 'center',
  },
  {
    _id: 2,
    video: 'https://player.vimeo.com/progressive_redirect/playback/210741604/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=9cd7733f84ed77b495ca6e52f752eb296bf89c0ab2782c517f3591c067a5fe0c',
    text: 'Bringing color and creativity to your spaces, one stroke at a time',
    textAlign: 'center',
  },
  {
    _id: 3,
    video: 'https://player.vimeo.com/progressive_redirect/playback/472556871/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=05354c7179cbef7924415829663ca7c6460bd6a708170a337e91d935f7590fa7',
    text:'Stirring up comfort and breeze, one spin at a time',
    textAlign: 'center',
  },
];

const HomeSlider = () => {
  const products = mockedProducts;

  return (
    <>
      <Carousel pause='hover' style={{ width: '1200px', margin: 'auto' }}>
        {products.map((product, index) => (
          <Carousel.Item key={product._id}>
            <div style={{ position: 'relative', width: '100%', height: '450px' }}>
              <video autoPlay loop muted id={`video${index}`} style={{ maxHeight: '800px', width: '100%' }}>
                <source src={product.video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%', 
                transform: 'translateX(-50%)', 
                textAlign: 'center', 
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
              }}>
                {product.text}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Home_smallcaro />

      
      <section className="about-us">
        <div className="section-title" data-aos="fade-up">
          <h2>About Us</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <p>At Vinayaga Agencies, we are dedicated to providing customers with a convenient and reliable platform to fulfill all their electrical hardware needs. Since 2005, we have been committed to offering a diverse range of high-quality electrical supplies to cater to various projects and requirements.</p>
            <p>Our mission is to simplify the shopping experience for both professionals and DIY enthusiasts in the electrical industry. With user-friendly navigation, detailed product descriptions, and secure payment options, we make it easy for customers to find and purchase the products they need with confidence.</p>
            <p>What sets us apart is our commitment to customer satisfaction and convenience. We prioritize fast order processing, reliable shipping, and responsive customer support to ensure a seamless shopping experience from start to finish.</p>
            <div className="col-md-6">
              <Card>
                <Card.Img variant="top" src={shop} />
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Service /><br /><br />
      <Brand />
    </>
  );
};

export default HomeSlider;
