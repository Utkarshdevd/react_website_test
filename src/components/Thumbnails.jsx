import React from 'react'

const Thumbnails = ({ photos }) => (
    <div>
        {
            photos.map(photo => (
                    <div key={photo.id} className="col-md-2" style={{marginRight:'10px',marginBottom:'10px'}} >
                        <img src={photo.image_url} alt=""/>
                    </div>
            ))
        }
    </div>
)

Thumbnails.propTypes = {
    photos: React.PropTypes.array.isRequired
};

export default Thumbnails;