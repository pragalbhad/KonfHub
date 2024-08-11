import React from 'react'

const Sponsers = ({eventSponser}) => {
  return (
    <div className='sponser-card-wrapper'>
        <img src={eventSponser.imageUrl} alt={eventSponser?.alt} width="100%" style={{borderRadius: '10px'}} />
    </div>
  )
}

export default Sponsers