"use strict";

class VolumeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let knobTurn = {
      transform: "rotate(0deg)"
    }
    if(this.props.volume === 0) {
      knobTurn = {
        transform: "rotate(-270deg)"
      }
    }

    return (
      <div>
        <div id="volume-container">
          <div id="volume-knob" style={knobTurn} onClick={this.props.toggleVolume}>
            <div id="volume-indicator"></div>
          </div>

          <div id="volume-knob-shadow"></div>

          <p id="volume-0-text">0</p>
          <p id="volume-100-text">100</p>
        </div>
      </div>
    );
  }
}