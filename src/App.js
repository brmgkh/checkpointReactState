import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Presentation from "./Component/Presentation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  togglShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <Button
          variant="outline-success"
          style={{ margin: "50px 100px" }}
          onClick={this.togglShow}
        >
          {this.state.show ? "Bye Bye" : "Rencontrer Ibrahim"}
        </Button>

        {this.state.show && <Presentation />}
      </div>
    );
  }
}

export default App;
