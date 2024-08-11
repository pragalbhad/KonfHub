import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { Spinner, Alert, Card } from 'react-bootstrap';
import './Poster.css';

const PosterWrapper = () => {
    const { data, loading, error } = useContext(DataContext);

    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">Error: {error}</Alert>;

    return (
        <Card className='poster-wrapper w-lg-90 w-md-100'>
            <Card.Body className='poster-content'>
                <Card.Img src={data?.event_poster_url} alt="Event Poster" />
            </Card.Body>
        </Card>
    );
}

export default PosterWrapper;
