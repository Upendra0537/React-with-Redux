import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

//Author: Upendra Kanuru

class App extends React.Component{
/*    constructor(props)
    {
        super(props);
        // this is the only time we do the direct assignment
        this.state = { lat: null , errorMessage: ''}  
    };
*/

    state = { lat: null , errorMessage: ''};
    componentDidMount(){
        console.log("My component was rerendered to the screen")
        window.navigator.geolocation.getCurrentPosition(
            //            (position) => console.log(position),
                            (position) =>{
                                this.setState({lat: position.coords.latitude})
                                //We should not use the below statement
                                //this.state.lat = position.coords.latitude
                            },
                            (err) => {
                                console.log(err);
                                this.setState({errorMessage: err.message})
                            }
                    );
    }

    componentDidUpdate(){
        console.log("My Component was just updated - it rerendered")
    }

    //helper method
    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage} </div>;
        }
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        return<Spinner spinnertext="Please accept location request"/>;
    }

    render(){
       return (
            <div>
                {this.renderContent()}
            </div>
       );
    }; 
};

ReactDOM.render(<App/>,document.querySelector("#root"));