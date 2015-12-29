import React, {Component} from "react";
import Slider from "react-slick";
import Instafeed from "instafeed.js";

import classNames from "./styles";


const MAIN_GEAR = [
  "48 Channel Soundcraft Ghost",
  "Otari MTR 90 24 trk",
  "Studer 2 trk",
  "Protools 11",
  "Barefoot, B&W and Yamaha NS 10 monitors",
  "EMT plate reverb and spring verbs"
];

const MIC_PRES = [
  "Wonder Audio",
  "API 512",
  "API 312",
  "Helios",
  "Electrodyne",
  "Burl",
  "Flickenger",
  "Neve ",
  "Shadow Hills",
  "Chandler"
];

const COMPRESSORS = [
  "API 512",
  "Empirical lab Distressers",
  "Retro Sta Level",
  "Dangerous Audio",
  "Inward Connection ",
  "DBX"
];

const INSTRUMENTS = [
  "Various Drum sets ",
  "Hammond Organs B3, M100",
  "Wurlitzer, Rhodes, Vox Jaguar, Baldwin piano, vibraphone ",
  "And various Synths "
];

const BACKGROUNDS = [
  require("app/assets/images/Rack.jpg"),
  require("app/assets/images/Guitars.jpg"),
  require("app/assets/images/Barefoot.jpg"),
  require("app/assets/images/Devices.jpg"),
  require("app/assets/images/Mixer.jpg"),
  require("app/assets/images/Mixer Close.jpg"),
  require("app/assets/images/Mixer_Wide.jpg"),
  require("app/assets/images/Yamaha.jpg"),
  require("app/assets/images/Lamp.jpg"),
  require("app/assets/images/Drumset.jpg"),
  require("app/assets/images/Chairs.jpg"),
  require("app/assets/images/Piano.jpg"),
  require("app/assets/images/Pingpong.jpg")
];

export default class Gear extends Component {
  constructor (props) {
    super(props);

    // let feed = new Instafeed({
    //   clientId: "f0ddb53904da4196b40d29b126117404",
    //   accessToken: "188346280.f0ddb53.111f63cdd4704f019f95b47063181a82",
    //   get: "user",
    //   userId: "1753031531",
    //   resolution: "standard_resolution",
    //   success: (results) => {
    //     debugger;
    //   }
    // }).run();

    this.state = {
      backgroundIndex: 0
    };
  }

  render () {

    let sliderOptions = {
      className: classNames.slider,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 5000,
      autoplaySpeed: 5000,
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
        <h2>Studio Gear</h2>
        <ul>
          {MAIN_GEAR.map((gearItem, i) =>
            <li key={i}>{gearItem}</li>
          )}
        </ul>

        <h3>Mic Pres</h3>
        <ul>
          {MIC_PRES.map((gearItem, i) =>
            <li key={i}>{gearItem}</li>
          )}
        </ul>

        <h3>Compressors</h3>
        <ul>
          {COMPRESSORS.map((gearItem, i) =>
            <li key={i}>{gearItem}</li>
          )}
        </ul>

        <h3>Microphones</h3>
        <ul><li>Assortment of condenser, ribbons, and dynamics</li></ul>

        <h3>Instruments</h3>
        <ul>
          {INSTRUMENTS.map((gearItem, i) =>
            <li key={i}>{gearItem}</li>
          )}
        </ul>

      </div>
    </div>
  }
}

