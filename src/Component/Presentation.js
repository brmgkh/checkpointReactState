import React, { Component } from "react";
import img from "../../src/images/lumierePresentation.jpg";

class Presentation extends Component {
  state = {
    fullName: "Ibrahim Maghraoui",
    bio: "Je m'appelle Ibrahim Maghraoui.Je suis un développeur web full-stack et spécialiste javascript.N'hésitez pas à jeter un coup d'œil à mes derniers projets sur mon portfolio.",
    count: 0,
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div
        style={{
          marginLeft: "400px",
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <img src={img} height="300px" width="270px"></img>
        <div style={{ marginTop: "50px" }}>
          {" "}
          <h6> Durée de la rencontre : {this.state.count} secondes </h6>
          <div>
            {" "}
            <h5 style={{ fontWeight: "normal" }}> Bonjour !</h5> <br />
            <p style={{ width: "600px" }}>
              <h4>{this.state.bio}</h4>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Presentation;
