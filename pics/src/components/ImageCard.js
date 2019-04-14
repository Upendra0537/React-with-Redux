import React from "react";

class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {span:0};
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans = () => {
//        console.log(this.imageRef);
        const height = this.imageRef.current.clientHeight;
        console.log(height);
        const calcSpan = Math.ceil(height/10);
        this.setState({span:calcSpan});
    };

    render(){
        const {description,urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img
                    ref = {this.imageRef}
                    alt={description}
                    src={urls.regular}
                    />
            </div>
        );
    };
}

export default ImageCard;