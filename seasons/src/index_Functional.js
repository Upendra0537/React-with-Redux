import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
return (
<div>
Hi There
<SeasonDisplay></SeasonDisplay>
</div>
);
};

ReactDOM.render(<App/>,document.querySelector("#root"));