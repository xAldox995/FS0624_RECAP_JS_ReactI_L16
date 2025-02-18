/* eslint-disable react/prop-types */
import { Component } from "react";

class ImageComp extends Component {
render(){
    return (
        <div className="m-5">
            <img src={this.props.url} alt="immagineTasto" />
        </div>
    );
}
}

export default ImageComp