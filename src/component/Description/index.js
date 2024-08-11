import React from 'react';
import "./Description.css";

const Description = ({ isHeading, isParagraph, isSubHeading, description }) => {
    return (
        <>
            {isHeading && <h1
                className="description-content-heading"
                dangerouslySetInnerHTML={{ __html: description }}
            />}

            {isParagraph && <div
                className="description-content-paragraph"
                dangerouslySetInnerHTML={{ __html: description }}
            />}
        </>
    )
}

export default Description
