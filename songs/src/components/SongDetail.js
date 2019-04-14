import React from "react";
import {connect} from "react-redux";

const SongDetail = (props) =>{
    if(!props.selectedSong){
        return<div>Select a song</div>
    }
    return(
        <div>
            <h3> Details For: </h3> 
            <p>Title: {props.selectedSong.title}</p>
            <p>Duration: {props.selectedSong.duration}</p>

        </div>
    );
}

const mapStateToProps = (state) => {
    return{selectedSong: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);