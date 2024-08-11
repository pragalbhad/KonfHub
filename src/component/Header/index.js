import React, { useContext } from 'react';
import './Header.css';
import { DataContext } from '../../context/DataContext';
import { FaUser, FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { data, loading, error } = useContext(DataContext);

    console.log(data, 'data', data?.poster_thumbnail)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <header className="header">
            <div className="logo-left">
                <img src={data?.navbar_icon} alt="Left Logo" />
            </div>
            <div className="logo-right">
                <FaUser />
            </div>
        </header>
    );
};

export default Header;