//import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
//create a react component 
//const App = () => {}
const App = function(){
//    return <div>Hello World</div>;
//    const buttonText = 'clickMe';
      const buttonText = {text : "clickMeObj"};
      const style = {backgroundColor: 'blue',color: 'white'}
    return (
    <div>
        <label className = "lable" htmlFor="name">Enter Name:</label>
        <input id="name" type="text"/>
        <button style={style}>
        {buttonText.text}
        </button>
    </div> 
    );
};
//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));