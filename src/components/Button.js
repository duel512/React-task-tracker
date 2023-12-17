import React from "react";
import PropTypes from 'prop-types';

const Button = ({ color, text, onClickFunction }) => {
    return <button 
        style={{ backgroundColor: color}} 
        className="btn"
        onClick={onClickFunction}>
        {text}
    </button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.protoTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClickFunction: PropTypes.func.isRequired
}

export default Button;