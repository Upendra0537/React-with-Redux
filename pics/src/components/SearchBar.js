import React from "react";

class SearchBar extends React.Component{
   
//<input type="text" onChange={this.onInputChange} onClick={this.onInputClick}/>  
//onInputChange(event){
//    console.log(event.target.value)
//};

//onInputClick(event){
//    console.log("Clicked")
//}

    state = {term:''};

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term)
// to call props in class component
        this.props.runSubmit(this.state.term);
    };

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={(e) => this.setState({term: e.target.value})}/>  
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;