"use strict";

class PitchControl extends React.Component {
  constructor(props) {
    super(props)
    this.getPitchSliderValue = this.getPitchSliderValue.bind(this);
  }

  getPitchSliderValue() {
    let sliderValue = document.getElementById("pitch-slider").value;
    let pitchValue = "";

    switch(sliderValue) {
      case "0":
        pitchValue = 1;
        break;
      case "1":
        pitchValue = 2;
        break;
      case "2":
        pitchValue = 4;
        break;
      case "3":
        pitchValue = 8;
        break;
      case "4":
        pitchValue = 16;
        break;
      case "5":
        pitchValue = 32;
        break;
      case "6":
        pitchValue = 64;
        break;
      case "7":
        pitchValue = 128;
        break;
      case "-1":
        pitchValue = 0.5;
        break;
      case "-2":
        pitchValue = 0.25;
        break;
      case "-3":
        pitchValue = 0.125;
        break;
      case "-4":
        pitchValue = 0.0625;
        break;
      case "-5":
        pitchValue = 0.03125;
        break;
      case "-6":
        pitchValue = 0.015625;
        break;
      case "-7":
        pitchValue = 0.0078125;
        break;
      default:
        break;
    }

    this.props.setCurrentPitch(pitchValue);
  }

  render() {
    return (
      <div id="pitch-control-section">
        <div id="pitch-title">Pitch</div>

        <input name="pitch-slider" id="pitch-slider" className="slider" type="range" min="-7" max="7" step="1"
        defaultValue="0" onChange={this.getPitchSliderValue} />

        <div className="range-tick-container">
          <div className="range-tick tick-0">-7</div>
          <div className="range-tick tick-1">-6</div>
          <div className="range-tick tick-2">-5</div>
          <div className="range-tick tick-3">-4</div>
          <div className="range-tick tick-4">-3</div>
          <div className="range-tick tick-5">-2</div>
          <div className="range-tick tick-6">-1</div>
          <div className="range-tick tick-middle">0</div>
          <div className="range-tick tick-7">+1</div>
          <div className="range-tick tick-8">+2</div>
          <div className="range-tick tick-9">+3</div>
          <div className="range-tick tick-10">+4</div>
          <div className="range-tick tick-11">+5</div>
          <div className="range-tick tick-12">+6</div>
          <div className="range-tick tick-13">+7</div>
        </div>
      </div>
    );
  }
}
