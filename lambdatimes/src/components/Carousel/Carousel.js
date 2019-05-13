import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [],
      displayImagePosition: 0
    };
  }
  componentDidMount() {
    this.setState({
      carouselData: carouselData
    });
  }

  leftClick = () => {
    let count = this.state.displayImagePosition;
    count = count - 1;
    this.setState({
      displayImagePosition: count
    });
  };

  rightClick = () => {
    let count = this.state.displayImagePosition;
    count = count + 1;
    this.setState({
      displayImagePosition: count
    });
  };

  selectedImage = count => {
    if (count >= this.state.carouselData.length) {
      count = 0;
    } else if (count <= -1) {
      count = this.state.carouselData.length - 1;
    }
    const displayImage = this.state.carouselData[count];
    return (
      <img src={displayImage} style={{ display: "block" }} alt="carousel" />
    );
  };

  componentDidUpdate() {
    if (this.state.displayImagePosition >= this.state.carouselData.length) {
      this.setState({ displayImagePosition: 0 });
    } else if (this.state.displayImagePosition <= -1) {
      this.setState({
        displayImagePosition: this.state.carouselData.length - 1
      });
    }
  }

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
        {this.selectedImage(this.state.displayImagePosition)}
      </div>
    );
  }
}
