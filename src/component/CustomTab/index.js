import React, { useState, useRef } from 'react';
import './CustomTab.css';
import About from '../../container/Dashboard/About/About';
import Tickets from '../../container/Dashboard/Tickets/Tickets';
import Speakers from '../../container/Dashboard/Speaker/Speaker';
import WorkShop from '../../container/Dashboard/WorkShop/WorkShop';
import EventSponser from '../../container/Dashboard/EventSponser/EventSponser';


const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs ? tabs[0].id : 0);
  const tabNavRef = useRef(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const scrollLeft = () => {
    tabNavRef.current.scrollBy({
      left: -100,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    tabNavRef.current.scrollBy({
      left: 100,
      behavior: 'smooth'
    });
  };

  return (
    <div className="tabs-container">
      <div className="tabs-nav-wrapper">
        <button className="scroll-button left d-block d-lg-none" onClick={scrollLeft}>{"<"}</button>
        <div className="tabs-nav" ref={tabNavRef}>
          {tabs?.map((tab) => (
            <div
              key={tab?.id}
              className={`tab-nav-item ${activeTab === tab?.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab?.id)}
            >
              {tab?.label}
            </div>
          ))}
        </div>
        <button className="scroll-button right d-block d-lg-none" onClick={scrollRight}>{">"}</button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <About />}
        {activeTab === 1 && <Tickets />}
        {activeTab === 2 && <Speakers />}
        {activeTab === 3 && <WorkShop />}
        {activeTab === 4 && <EventSponser />}
      </div>
    </div>
  );
};

export default Tabs;
