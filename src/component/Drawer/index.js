import React, { useEffect } from 'react';
import './Drawer.css';

const CustomDrawer = ({ show, onClose, children, title, width }) => {

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('backdrop')) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'auto';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  return (
    <>
      <div width={width && width} className={`backdrop ${show ? 'show' : ''}`} onClick={handleOutsideClick}></div>
      <div className={`custom-drawer ${show ? 'open' : 'close'}`}>
        <div className="drawer-header">
          <h5>{title}</h5>
          <button onClick={onClose} className="close-btn">×</button>
        </div>
        <div className="drawer-body">
          {children}
        </div>
      </div>
    </>
  );
};

export default CustomDrawer;

