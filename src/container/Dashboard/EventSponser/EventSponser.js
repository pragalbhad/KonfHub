import React, { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';
import { Row, Col } from 'react-bootstrap';
import Sponsers from './Sponsers';
import "./EventSponser.css";

const EventSponser = () => {
    const { data, loading, error } = useContext(DataContext);

    const eventSponserData = [
        {
            id: 0,
            imageUrl: 'https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75',
        },
        {
            id: 1,
            imageUrl: 'https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg',
        }
    ];

    return (
        <div>
            <h2>THIS IS EVENT SPONSORS</h2>
            <p>This is description of sponsors section.</p>
            <Row className="w-100 d-flex mt-4">
                {eventSponserData.map((eventSponser) => (
                    <Col key={eventSponser.id} sm={12} md={6} lg={6}>
                        <Sponsers eventSponser={eventSponser} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default EventSponser;
