import React from "react";



const ErrorModal = (props) => {
    return (
        <React.Fragment>

        <React.Fragment>

        </React.Fragment>
        <React.Fragment>
            <h2>{props.title}</h2>
            <p>
                            {props.errorMessage}

            </p>
            <div>
                <button>Close</button>
            </div>
        </React.Fragment>
        </React.Fragment>

    )
}

export default ErrorModal;