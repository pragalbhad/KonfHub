import React from 'react';
import './GroupAvatar.css';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const GroupAvatar = ({ avatars }) => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {props.title}
        </Tooltip>
    );

    return (
        <div className="group-avatar">
            {avatars.map((avatar, index) => (
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip(avatar)}
                >
                    <img
                        className="avatar"
                        alt={index}
                        src={avatar?.imageUrl}
                    />
                </OverlayTrigger>
            ))}
        </div>
    );
};

export default GroupAvatar;
