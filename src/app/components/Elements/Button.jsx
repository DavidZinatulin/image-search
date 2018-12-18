import * as React from "react";

const Button = ({ onClick, label, className = '', disabled = false }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;