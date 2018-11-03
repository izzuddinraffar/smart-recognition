import React, { Component } from 'react';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import InputForm from './components/InputForm/InputForm';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'API KEY HERE'
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input : '',
      imageURL : '',
      box : []
    }
  }

  componentDidMount(){
    this.state.input = 'http://1077thejewel.com/wp-content/uploads/Confident-People-Happy-Group.jpg';
    this.state.imageURL = this.state.input;
    this.onSubmitImg();
  }

  calculateFaceLocation = (clarifaiFace) => {
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onChangeImg = (event) => {
    this.setState({input:event.target.value});
  }
  onSubmitImg = () => {
    this.setState({imageURL:this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => {
      //data.outputs[0].data.regions[index].region_info.bounding_box;
      const arr = [];
      response.outputs[0].data.regions.map((item, i) => {
        return arr.push(this.calculateFaceLocation(item.region_info.bounding_box));
      })
      this.displayFaceBox(arr);
    })
    .catch(err => console.log(err));
  }
  render() {
    const imageURL = this.state.imageURL;
    const box = this.state.box;
    return (
      <div className="App">
         <InputForm change={this.onChangeImg} click={this.onSubmitImg}/>
         <FaceRecognition box={box} imageURL={imageURL}/>
      </div>
    );
  }
}

export default App;
