"use strict";

class DisplayLeft extends React.Component {
  constructor(props) {
    super(props)
  }

  mapNoteBlocks1(key) {
    return this.props.playbackArr.filter(i =>
      i.key === key && i.kit === "kit1").map(i =>
        <div key={i.kit + i.key + i.time} className={this.noteBlockStyle()}
        style={{left: ( (i.time / 1000).toFixed(1) * 10 ) + "%",
        backgroundColor: sampleKits[i.kit][i.key].noteColor}}></div>
    );
  }

  mapNoteBlocks2(key) {
    return this.props.playbackArr.filter(i =>
      i.key === key && i.kit === "kit2").map(i =>
        <div key={i.kit + i.key + i.time} className={this.noteBlockStyle()}
        style={{left: ( (i.time / 1000).toFixed(1) * 10 ) + "%",
        backgroundColor: sampleKits[i.kit][i.key].noteColor}}></div>
    );
  }

  noteBlockStyle() {
    if(this.props.power === "on") {
      return "note-block note-block-on";
    }
    else {
      return "note-block note-block-off"
    }
  }

  render() {
    let movePlayLine = {
      opacity: "1.0"
    };

    if(this.props.power === "off") {
      movePlayLine = {
        opacity: "0.0"
      }
    }
    if(this.props.nowRecording === true || this.props.nowPlaying === true) {
      movePlayLine = {
        transition: "transform 10s linear",
        transform: "translateX(" + (document.getElementById("display-left").offsetWidth - 5) + "px)"
      }
    }

    return (
      <div>
        <div id="other-test">
          <p>C</p>
          <p>X</p>
          <p>Z</p>
          <p>D</p>
          <p>S</p>
          <p>A</p>
          <p>E</p>
          <p>W</p>
          <p>Q</p>
        </div>

        <div id="display-left">
          <div id="play-line" style={movePlayLine}></div>

          <div className="test-line" id="test-line-1">{this.mapNoteBlocks1("C")}</div>
          <div className="test-line" id="test-line-2">{this.mapNoteBlocks1("X")}</div>
          <div className="test-line" id="test-line-3">{this.mapNoteBlocks1("Z")}</div>
          <div className="test-line" id="test-line-4">{this.mapNoteBlocks1("D")}</div>
          <div className="test-line" id="test-line-5">{this.mapNoteBlocks1("S")}</div>
          <div className="test-line" id="test-line-6">{this.mapNoteBlocks1("A")}</div>
          <div className="test-line" id="test-line-7">{this.mapNoteBlocks1("E")}</div>
          <div className="test-line" id="test-line-8">{this.mapNoteBlocks1("W")}</div>
          <div className="test-line" id="test-line-9">
            <div>{this.mapNoteBlocks1("Q")}</div>
            <div>{this.mapNoteBlocks2("Q")}</div>
          </div>
        </div>
      </div>
    );
  }
}

class DisplayRight extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.power === "off" || this.props.currentPad === "") {
      return (
        <div>
          <div id="display-right"></div>
        </div>
      );
    }
    else {
      return (
        <div>
          <div id="display-right">{sampleKits[this.props.currentKit][this.props.currentPad].desc}</div>
        </div>
      );
    }
  }
}
