import React from 'react';

const GoogleMap = (props) => {
  const { event } = props;
  return (
    <div className='google-map-code'>
      <iframe
        src={event.eventLocation.googleMapSrc}
        width='100%'
        height='400'
        frameBorder='0'
        style={{ border: 0 }}
        allowFullScreen=''
        aria-hidden='false'
        tabIndex='0'
        title={event.name}
      ></iframe>
    </div>
  );
};
export default GoogleMap;
