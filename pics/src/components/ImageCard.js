import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  render() {
    const { urls, descriptiom } = this.props.image;
    const { spans } = this.state;

    return (
      <div style={{ grdRowEnd: `span ${spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={descriptiom} />
      </div>
    );
  }
}

export default ImageCard;
