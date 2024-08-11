import React, { useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe } from 'react-icons/fa';

import Drawer from '../../../component/Drawer';
import Description from '../../../component/Description';
import { DataContext } from '../../../context/DataContext';
import './Speaker.css'

const Speakers = () => {
    const { data, loading, error } = useContext(DataContext);
    const [showDrawer, setShowDrawer] = useState(false);
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const speakersData = [
        {
            id: 0,
            title: 'Bruce Wayne',
            description: 'Chairman',
            additionalDetails: 'Wayne Enterprises',
            imageUrl: 'https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg',
        },
        {
            id: 1,
            title: 'Dark Knight',
            description: 'Batman',
            additionalDetails: 'Gotham',
            imageUrl: 'https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg',
        }
    ];

    const handleCardClick = (speaker) => {
        setSelectedSpeaker(speaker);
        setShowDrawer(true);
    };

    const handleCloseDrawer = () => {
        setShowDrawer(false);
        setSelectedSpeaker(null);
    };

    return (
        <div>
            <Description isHeading description={data.speaker_section_title} />
            <Description isParagraph description={data.speaker_section_description} />
            <Row className="w-100 d-flex mt-4">
                {speakersData.map((speaker) => (
                    <Col key={speaker.id} sm={12} md={6} lg={5}>
                        <div onClick={() => handleCardClick(speaker)}>
                            <div className="profile-card d-flex">
                                <div className="card-img">
                                    <img src={speaker.imageUrl} alt="profile" />
                                </div>
                                <div className="card-content">
                                    <h2>{speaker.title}</h2>
                                    <p>{speaker.description}</p>
                                    <p>{speaker.additionalDetails}</p>
                                    <div className="social-icons">
                                        <a href="#"><FaFacebook /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaLinkedin /></a>
                                        <a href="#"><FaGlobe /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {showDrawer &&
                <Drawer show={showDrawer} onClose={handleCloseDrawer} placement="end" width='37rem' title="Speaker Section">

                    <div className="d-flex">
                        <div className="card-img">
                            <img src={selectedSpeaker?.imageUrl} alt={selectedSpeaker?.title} />
                        </div>
                        <div className="card-content">
                            <h2>{selectedSpeaker?.title}</h2>
                            <p>{selectedSpeaker?.description}</p>
                            <p>{selectedSpeaker?.additionalDetails}</p>
                            <div className="social-icons">
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaLinkedin /></a>
                                <a href="#"><FaGlobe /></a>
                            </div>
                        </div>
                    </div>
                </Drawer>

            }
        </div>
    );
};

export default Speakers;
