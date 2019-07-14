import React from 'react';
import './Good.css';
import PropTypes from 'prop-types';

function Good({name}) {
    return (
        <span className="goodName">{name} </span>
    );
}

Good.prototype = {
    name: PropTypes.string.isRequired
}


export default Good