import React, { useContext } from 'react'
import { DataContext } from '../../../context/DataContext';
import Description from '../../../component/Description';
import './About.css';

const About = () => {
    const { data, loading, error } = useContext(DataContext);

    const description = data.description
    return (
        <div>
            <div className='about-heading'>About Event</div>
            <div
                className="description-content"
            >
                <Description isParagraph description={data.description} />
            </div>
        </div>
    )
}

export default About
