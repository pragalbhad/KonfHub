import React, { useContext, useEffect, useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { FaTicket } from 'react-icons/fa6';
import { DataContext } from '../../context/DataContext';
import useDateFormatter from '../../hooks/useDateFormatter';
import './RightSideContent.css';

const CountdownTimer = ({ startDate, startTime, endDate, endTime }) => {
    const getTargetDateTime = () => {
        const startDateTime = new Date(`${startDate}T${startTime}`);
        return startDateTime;
    };

    const calculateTimeLeft = () => {
        const now = new Date();
        const targetDateTime = getTargetDateTime();
        const difference = targetDateTime - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }
        return {};
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [startDate, startTime]);

    return (
        <div className='count-down-time'>
            {timeLeft.days !== undefined ? (
                <>
                    {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M : {timeLeft.seconds}S
                </>
            ) : (
                <div>Time's up!</div>
            )}
        </div>
    );
};


const Task = () => {
    const { data, loading, error } = useContext(DataContext);
    const formattedDateRange = useDateFormatter(data?.start_date, data?.end_date, data?.start_time, data?.end_time, data?.time_zone);


    console.log(data, 'data', data?.poster_thumbnail);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='task-wrapper'>
            <div className='content-wrapper'>

                <div className='task-header d-flex align-center justify-center'>
                    <h1>{data?.name || 'Default Header'}</h1><h3>({data?.event_short_name})</h3>
                </div>

                <div className='d-flex align-center' style={{ gap: '4rem' }}>

                    <div className='d-flex align-center'>
                        <div className='icon'><FaVideo /></div>
                        <div className='mr-2'>Online</div>
                    </div>

                    <div className='d-flex align-center'>
                        <div className='icon'><FaTicket /></div>
                        <div className='mr-2'>Paid</div>
                    </div>

                </div>

                <div className='mt-3'>
                    <div><strong>Event Live Link:</strong> <a href="" > Open streaming website </a></div>
                    <div><strong>Date:</strong> {formattedDateRange && formattedDateRange}</div>
                </div>

                <div className='mt-3'>
                    <div>EVENT STARTS IN</div>
                    <div className='count-down-time'>
                        <CountdownTimer
                            startDate={data?.start_date}
                            startTime={data?.start_time}
                            endDate={data?.end_date}
                            endTime={data?.end_time}
                        />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Task
