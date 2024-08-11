import React, { useContext } from 'react';
import Card from '../../../component/Card';
import { Row } from 'react-bootstrap';
import Accordion from '../../../component/Accordion';
import { DataContext } from '../../../context/DataContext';
import '../About/About';

const Tickets = () => {
    const { data, loading, error } = useContext(DataContext);


    const firstAccordionItem = [
        {
            title: 'This is category',
            content: [
                {
                    id: 0,
                    title: 'Free Ticket in Category1',
                    description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised.',
                    location: '',
                    additionalDetails: 'This is additional venue details.',
                    availability: 'Available Till: 31st Aug 2034, 06:00 PM IST',
                    price: "Free",
                    buttonText: "Register"
                },
                {
                    id: 1,
                    title: 'Paid Ticket in Category1',
                    description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised.',
                    location: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
                    additionalDetails: 'This is additional venue details.',
                    availability: 'Available Till: 31st Aug 2034, 06:00 PM IST',
                    price: "1,000",
                    buttonText: "Register"
                },
            ]
        },
    ];

    const secondAccordionItem = [
        {
            title: 'This is also a category. But with a little longer name. Also note, this category expanded by default.',
            content: [
                {
                    id: 99858,
                    title: 'Free Ticket in Category2',
                    description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised.',
                    location: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
                    additionalDetails: 'This is additional venue details.',
                    availability: 'Available Till: 31st Aug 2034, 06:00 PM IST',
                    price: "Free",
                    buttonText: "Register"
                },
                {
                    id: 99858,
                    title: 'Paid Ticket in Category2',
                    description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised.',
                    location: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
                    additionalDetails: 'This is additional venue details.',
                    availability: 'Available Till: 31st Aug 2034, 06:00 PM IST',
                    price: "1,000",
                    buttonText: "Register"
                },
            ],
            isOpenAccoordion: true,
        },
    ];

    const handleRegisterClick = (ticketId) => {
        return () => {
            const url = `/checkout?ticketId=${ticketId}`;
            window.location.href = url;
        };
    };


    const ticketsData = [
        {
            id: 99858,
            title: 'Free Ticket',
            description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised.',
            location: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
            additionalDetails: 'This is additional venue details.',
            availability: 'Available Till: 31st Aug 2034, 06:00 PM IST',
            price: "Free",
            buttonText: "Register"
        },
        {
            id: 99858,
            title: 'Paid Ticket',
            description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised.',
            location: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
            additionalDetails: 'This is additional venue details.',
            availability: 'Available Till: 31st Aug 2034, 06:00 PM IST',
            price: "1000",
            buttonText: "Register"
        },
        {
            id: 99858,
            title: 'Donation  Ticket',
            description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised.',
            location: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
            additionalDetails: 'This is additional venue details.',
            availability: 'Available Till: 31st Aug 2034, 06:00 PM IST',
            price: null,
            minPrice: "10",
            maxPrice: "1000",
            buttonText: "Register"
        },
        {
            id: 99858,
            title: 'Ticket With Coupon',
            description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised.',
            location: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
            additionalDetails: 'This is additional venue details.',
            availability: 'Available Till: 31st Aug 2034, 06:00 PM IST',
            price: "1,000",
            buttonText: "Register"
        },
    ];

    return (
        <div>
            <div className='about-heading'>TICKETS</div>
            <Row className="w-100 px-lg-5 px-sm-0 d-flex mt-4">
                {ticketsData?.map((ticket) => (
                    <Card
                        key={ticket.id}
                        title={ticket.title}
                        description={ticket.description}
                        location={ticket.location}
                        additionalDetails={ticket.additionalDetails}
                        availability={ticket.availability}
                        price={ticket.price}
                        minPrice={ticket.minPrice}
                        maxPrice={ticket.maxPrice}
                        buttonText={ticket.buttonText}
                        isButton
                        onButtonClick={handleRegisterClick(ticket.id)}
                    />
                ))}

                <Accordion items={firstAccordionItem} />
                <Accordion items={secondAccordionItem} />

            </Row>
        </div>
    );
};

export default Tickets;
