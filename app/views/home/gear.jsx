import React, {Component} from "react";
import Slider from "react-slick";

import classNames from "./styles";

const GEAR = [
  "Soundcraft Console 48x8x2",
  "Studer 2 track 1/2\"",
  "Otari 24 track 2\"",
  "Pro Tools HD 11",
  "Neve 6 channels mic-pre",
  "API 6 channels mic-pre",
  "API 312  4 channels mic-pre",
  "Shadow Hill 1 channel mic-pre",
  "Chandler 1 channel mic-pre",
  "Flickinger 1 channel mic-pre",
  "Distresser compressor",
  "API 550 compressor",
  "DBX compressor",
  "EMT 140 plate",
  "Lots of drums, organs, pianos, and guitars"
]

const BACKGROUNDS = [
  require("app/assets/images/Devices.jpg"),
  require("app/assets/images/Mixer.jpg"),
  require("app/assets/images/Mixer Close.jpg"),
  require("app/assets/images/Mixer_Wide.jpg"),
  require("app/assets/images/Yamaha.jpg"),
  require("app/assets/images/Lamp.jpg"),
  require("app/assets/images/Drumset.jpg"),
  require("app/assets/images/Chairs.jpg"),
  require("app/assets/images/Piano.jpg"),
  require("app/assets/images/Piano2.jpg")
]


export default class Gear extends Component {
  constructor (props) {
    super(props);
    this.state = {
      backgroundIndex: 0
    };
  }

  render () {

    let sliderOptions = {
      className: classNames.slider,
      arrows: true,
      autoplay: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      fade: true,
      swipe: false,
      lazyLoad: true
    }

    return <div className={classNames.gearPage}>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
      <div className={classNames.overlay}/>
      <Slider {...sliderOptions}>
        {BACKGROUNDS.map((backgroundSrc, i) =>
          <div className={classNames.sliderImage} style={{backgroundImage: `url(${ backgroundSrc })`}} key={i}/>
        )}
      </Slider>
      <div className={classNames.gearList}>
        <h2>Gear</h2>
        <ul>
          {GEAR.map((gearItem, i) =>
            <li key={i}>{gearItem}</li>
          )}
        </ul>
      </div>
    </div>
  }
}

