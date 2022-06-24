import React from "react";

const button = props =>(
    <button onClick={props.click}>
        {props.btnType}
    </button>
);

export default button;