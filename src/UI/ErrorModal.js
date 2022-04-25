import React from "react";

import './ErrorModal.css'

const ErrorModal = (props) => {
    return (


        <div className="backdrop">
            <h2>{props.title}</h2>
            <p>
                {props.errorMessage}
            </p>
            <div>
                <button>Close</button>
            </div>
        </div>

    )
}

export default ErrorModal;