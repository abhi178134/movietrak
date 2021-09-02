import React from 'react';

import {Image} from './Thumb.styles'

const thumb = ({image, movieId, clickable}) => (
    <div>
        <Image src={image} alt= 'movie-thumb' />

    </div>
);

export default thumb;