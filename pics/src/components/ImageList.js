import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) =>{
    console.log(props.images);
//const imagelist = props.images.map((image) => {return <img alt = {image.alt_description} key={image.id} src={image.urls.regular}/>});
const imagelist = props.images.map((image) => {return <ImageCard key={image.id} image={image}/>});
    return (
        <div className="image-list">
            {imagelist}
        </div>
    );
};

export default ImageList;