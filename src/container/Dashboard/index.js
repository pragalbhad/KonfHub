import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Poster from '../../component/PosterWrapper';
import RightSideContent from '../RightSideContent';
import CustomTabs from '../../component/CustomTab';
import './Dashboard.css';

const Dashboard = () => {
    const tabs = [
        { id: 0, label: 'About' },
        { id: 1, label: 'Tickets' },
        { id: 2, label: 'This is speakers section' },
        { id: 3, label: 'This is workshop section' },
        { id: 4, label: 'This is event sponsors' },
    ];

    const dashboardRef = useRef(null);
    const rightSectionRef = useRef(null);
    const [isLeftScrolled, setIsLeftScrolled] = useState(false);


    useEffect(() => {
        const rightSection = rightSectionRef.current;

        if (isLeftScrolled) {
            rightSection.style.position = 'relative'; 
        } else {
            rightSection.style.position = 'sticky'; 
            rightSection.style.top = '0';
        }
    }, [isLeftScrolled]);

    return (
        <Container fluid className="dashboard" ref={dashboardRef} style={{ overflowY: 'auto' }}>
            <Row>
                <Col lg={8} sm={12} className="left-section">
                    <Poster />
                    <CustomTabs tabs={tabs} />
                </Col>
                <Col lg={4} sm={12} className="right-section" ref={rightSectionRef}>
                    <RightSideContent />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
