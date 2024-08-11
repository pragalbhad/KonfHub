import React, { useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { DataContext } from '../../../context/DataContext';
import { FaCalendar } from 'react-icons/fa';
import Button from '../../../component/Button';
import GroupAvatar from './GroupAvatar';
import Drawer from '../../../component/Drawer';
import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe } from 'react-icons/fa';
import './WorkShop.css'
import Description from '../../../component/Description';
import { FaLocationPin } from 'react-icons/fa6';


const WorkShop = () => {
    const { data, loading, error } = useContext(DataContext);
    const [showDrawer, setShowDrawer] = useState(false);
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    console.log(selectedSpeaker, 'selectedSpeaker')

    const workShopData = [
        {
            id: 0,
            title: 'How to make more money',
            description: 'Jun 11th, 2024 at 10:00 AM (IST)',
            imageUrl: 'https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=1920&q=75',
            speakers: [
                {
                    id: 0,
                    title: 'Bruce Wayne',
                    description: 'Chairman',
                    additionalDetails: 'Wayne Enterprises',
                    imageUrl: 'https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg',
                }
            ],
            location: "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
        },
        {
            id: 1,
            title: 'How to fight crime',
            description: 'Jun 1st, 2034 at 10:00 AM (IST)',
            imageUrl: 'https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1920&q=75',
            speakers: [
                {
                    id: 0,
                    title: 'Bruce Wayne',
                    description: 'Chairman',
                    additionalDetails: 'Wayne Enterprises',
                    imageUrl: 'https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg',
                }
            ],
            links: 'https://darkknight.in/'
        },
        {
            id: 2,
            title: 'This is a workshop connected to a ticket',
            description: 'Jun 1st, 2034 at 10:00 AM (IST)',
            additionalDetails: 'Gotham',
            imageUrl: 'https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=1920&q=75',
            speakers: [
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
            ],
            subDescription: 'This is the description of a workshop.'
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
            <Description isHeading description={data.workshop_section_description}/>
            <Description isParagraph description={data.workshop_section_description}/>

            <Row className="w-100 d-flex mt-4">
                {workShopData.map((workshop) => (
                    <Col key={workshop.id} sm={12} md={6} lg={6}>

                        <div className='workshop-section-wrapper d-flex flex-column p-3 my-3' onClick={() => handleCardClick(workshop)}>
                            <div className='workshop-img-wrapper w-100'>
                                <img src={workshop.imageUrl} />
                            </div>
                            <div className='mt-3'>
                                <div className="workshop-title">{workshop.title}</div>
                                <div className='d-flex align-center workshop-date'>
                                    <div><FaCalendar /></div>
                                    <div className='mx-2'>{workshop.description}</div>
                                </div>
                                <div className='d-flex align-center justify-content-between mt-3'>

                                    <div>
                                        <GroupAvatar avatars={workshop.speakers} />
                                    </div>

                                    <Button label={"View Details"} className="view-detail-button" />

                                </div>
                            </div>
                        </div>
                    </Col>
                ))}

            </Row>

            {showDrawer &&
                <Drawer show={showDrawer} onClose={handleCloseDrawer} placement="end" title="Workshop Section" width='37rem'>

                    <div className='d-flex flex-column p-3'>
                       
                        <div className='mt-3'>
                            <h2>{selectedSpeaker.title}</h2>
                            <div className="my-3">{selectedSpeaker.description}</div>
                            {selectedSpeaker && selectedSpeaker.location &&  <div className='workshop-location'><span className='mr-2'><FaLocationPin fill="#f70404" /></span><span className='ml-3'>{selectedSpeaker.location}</span></div>}
                            {selectedSpeaker && selectedSpeaker.links &&  <a className="workshop-link" href={selectedSpeaker.links}>{selectedSpeaker.links} </a> }
                            {selectedSpeaker && selectedSpeaker.subDescription &&  <div>{selectedSpeaker.subDescription}</div>}

                            {selectedSpeaker.speakers.map((data) => (
                                <div className="profile-card d-flex my-3" style={{ width: '70%' }}>
                                    <div className="card-img">
                                        <img src={data.imageUrl} alt="profile" />
                                    </div>
                                    <div className="card-content">
                                        <h2>{data.title}</h2>
                                        <p>{data.description}</p>
                                        <p>{data.additionalDetails}</p>
                                        <div className="social-icons">
                                            <a href="#"><FaFacebook /></a>
                                            <a href="#"><FaTwitter /></a>
                                            <a href="#"><FaLinkedin /></a>
                                            <a href="#"><FaGlobe /></a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </Drawer>

            }

        </div>
    );
};

export default WorkShop;
