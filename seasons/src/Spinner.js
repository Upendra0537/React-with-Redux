import React from "react";

const Spinner = (props) =>{
    return(
            <div class="ui active dimmer">
                <div class="ui text loader">{props.spinnertext}</div>
            </div>
    );
};

Spinner.defaultProps = {
    spinnertext: "Loading..."
};

export default Spinner;