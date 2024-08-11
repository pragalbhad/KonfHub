import React from 'react';
import Task from './Task';
import './RightSideContent.css';
import Button from '../../component/Button';
import HostedCard from './HostedCard';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Index = () => {

  return (
    <div className='right-side-wrapper'>
      <div><Task />

        <div className='button-wrapper mt-4'>
          <Button label="Buy Now" className="buy-btn common-btn" />
          <Button label="Official Website" icon={<FaExternalLinkAlt />} className="website-btn common-btn ml-3" />
        </div>
      </div>

      <div className='mt-4'>
        <div className='fw-bold font-large'>Hosted By</div>
        <HostedCard />
      </div>
    </div>
  );
};

export default Index;
