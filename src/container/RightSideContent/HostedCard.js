import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';
import { DataContext } from '../../context/DataContext';
import Description from '../../component/Description';

const HostedCard = () => {
  const { data, loading, error } = useContext(DataContext);

  return (
    <Card >
      <Card.Body>
        <div className="d-flex align-items-center">
          <img
            src={data.organiser_image_url} 
            alt="avatar"
            style={{ borderRadius: '50%', width: '50px', height: '50px' }}
          />
          <Card.Title className="ms-3">{data.organiser_name}</Card.Title>
        </div>
        <Card.Text>
          <Description description={data.organiser_info} />
        </Card.Text>

        <Card.Text className="contact-text">Contact Us On</Card.Text>
        <div className="d-flex gap-24">
          <a href="https://facebook.com"><FaFacebook fill="#000" /></a>
          <a href="https://twitter.com"><FaTwitter fill="#000" /></a>
          <a href="https://linkedin.com"><FaLinkedin fill="#000" /></a>
          <a href="https://yourwebsite.com"><FaGlobe fill="#000" /></a>
          <a href="mailto:email@example.com"><FaEnvelope fill="#000" /></a>
          <a href="tel:+1234567890"><FaPhone fill="#000" /></a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HostedCard;
