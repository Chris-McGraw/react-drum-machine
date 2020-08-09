'use strict';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: "on"
    };
    this.togglePower = this.togglePower.bind(this);
  }

  togglePower() {
    if(this.state.power === "on") {
      this.setState({
        power: "off"
      });
    }
    else {
      this.setState({
        power: "on"
      });
    }
  }

  render() {
    return (
      <div>
        <div id="drum-machine">
          <PowerContainer power={this.state.power} togglePower={this.togglePower} />
          <PadContainer power={this.state.power} />
        </div>
      </div>
    );
  }
}

class PowerContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let switchSlide = {
      transform: "translateY(0%)"
    }
    if(this.props.power === "off") {
      switchSlide = {
        transform: "translateY(100%)"
      }
    }

    return (
      <div>
        <div id="power-container">
          <div id="power-switch" style={switchSlide} onClick={this.props.togglePower}>
            <div id="power-switch-indicator"></div>
          </div>

          <div id="slider-path"></div>

          <div id="power-on-line">
            <p>ON</p>
          </div>

          <div id="power-off-line">
            <p>OFF</p>
          </div>
        </div>
      </div>
    );
  }
}

class PadContainer extends React.Component {
  constructor(props) {
    super(props);
    this.padPress = this.padPress.bind(this);
  }

  padPress() {
    console.log(this.props.power);
  }

  render() {
    if(this.props.power === "off") {
      padPowered = {
        backgroundImage: "none !important",
        backgroundColor: "#898F90 !important""
      }
    }

    return (
      <div>
        <div id="pad-container">
          <div className="drum-pad" id="pad-q" style={padPowered} onClick={this.padPress}></div>
          <div className="drum-pad" id="pad-w" onClick={this.padPress}></div>
          <div className="drum-pad" id="pad-e" onClick={this.padPress}></div>
        </div>
      </div>
    );
  }
}

const reactContainer = document.querySelector("#react-container");
ReactDOM.render(<DrumMachine />, reactContainer);
