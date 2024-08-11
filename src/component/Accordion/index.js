import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import './Accordion.css';
import Card from '../Card'
function Accordion({ items }) {
  return (
    <div className="accordion m-0 p-0 mb-3">
      {items.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
}

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(item?.isOpenAccoordion ?  item?.isOpenAccoordion: false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item"  onClick={toggle}>
      <div className='d-flex justify-content-between accordion-title  p-3'>
        <div className="accordion-header">
          {item.title}
        </div>
        <div className="icon">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      <div >
        {isOpen && (
          <div className="accordion-content p-3 mt-3 mb-2">
            {item.content && item.content.map((items)=>(
              <Card
              title={items.title} 
              description={item.description} location
              additionalDetails = {items.additionalDetails}
              availability = {items.availability}
              price = {items.price}
              buttonText = {items.buttonText}
              onButtonClick = {items.onButtonClick}
              imageUrl = {items.imageUrl}
              isSocialMediaIcon = {items.isSocialMediaIcon}
              isButton
               />
            ))}
            </div>
        )}
      </div>
    </div>
  );
}

export default Accordion
