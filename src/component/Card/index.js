import React, { useState } from 'react';
import { Col, Card as BootstrapCard, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Card.css';

const Card = ({ title, description, location, additionalDetails, availability, price, buttonText, onButtonClick, imageUrl, isSocialMediaIcon, isButton, minPrice, maxPrice }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await onButtonClick();
    setLoading(false);
  };

  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return price.replace(/,/g, '');
    }
    return price;
  };

  let displayPrice;

  if (price === 'Free') {
    displayPrice = <h2>Free</h2>;
  } else if (minPrice && maxPrice) {
    displayPrice = (
      <div className='min-max-price'>
        Min <h2>₹ {formatPrice(minPrice)}</h2>
        Max <h2>₹ {formatPrice(maxPrice)}</h2>
      </div>
    );
  } else if (price) {
    displayPrice = <h2>₹ {formatPrice(price)}</h2>;
  } else {
    displayPrice = <h2>Price Not Available</h2>;
  }

  console.log({
    price,
    minPrice,
    maxPrice,
    displayPrice
  });

  return (
    <Col className='card-wrapper p-lg-4 p-0' lg={12}>
      <BootstrapCard>
        {imageUrl && (
          <BootstrapCard.Img variant="top" src={imageUrl} className="w-100" />
        )}
        <BootstrapCard.Body>
          <h3 className='title'>{title}</h3>
          <p className='description'>{description}</p>
          <div className='location d-flex align-center cursor-pointer'>
            <div className='location-icon'><FaMapMarkerAlt /></div>
            <div className='mx-2'>{location}</div>
          </div>
          {additionalDetails && <p className='additional-detail'>{additionalDetails}</p>}
          <p className="availability p-2">{availability}</p>
          <div className='d-flex justify-content-between flex-wrap'>
            <div >
              {displayPrice}
            </div>
            {isButton &&
              <Button onClick={handleClick} className="register-button" disabled={loading}>
                {loading ? 'Loading...' : buttonText}
              </Button>
            }
          </div>

          {isSocialMediaIcon &&
            <div className="d-flex gap-24">
              <a href="https://facebook.com"><FaFacebook fill="#000" /></a>
              <a href="https://twitter.com"><FaTwitter fill="#000" /></a>
              <a href="https://linkedin.com"><FaLinkedin fill="#000" /></a>
              <a href="https://yourwebsite.com"><FaGlobe fill="#000" /></a>
              <a href="mailto:email@example.com"><FaEnvelope fill="#000" /></a>
              <a href="tel:+1234567890"><FaPhone fill="#000" /></a>
            </div>
          }
        </BootstrapCard.Body>
      </BootstrapCard>
    </Col>
  );
};

export default Card;
