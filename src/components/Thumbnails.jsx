import React from 'react'

const Thumbnails = ({ photos }) => (
    <div className="row">
        {
            photos.map((photo, index) => (
                    <div key={index} className="col-md-3 clearfix" style={{marginTop:'10px', marginLeft:'0px'}} >
                        <img src={photo.media.m} alt=""/>
                    </div>
            ))
        }
    </div>
)

Thumbnails.propTypes = {
    photos: React.PropTypes.array.isRequired
};

export default Thumbnails;