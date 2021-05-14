import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      returnMsg: "",
      alert: ""
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  passMsg = () => {
    const newMsg = this.state.inputValue.toUpperCase().trim();
    if (this.state.inputValue) {
      this.setState({
        returnMsg: newMsg,
        inputValue: ""
      });
    } else {
      this.setState({ alert: "Enter a valid value" });
      setTimeout(() => this.setState({ alert: "" }), 1000);
    }
  };

  render() {
    const { inputValue, returnMsg, alert } = this.state;
    return (
      <div className="wrapper">
        <p>A Message You Would Like to Pass</p>
        <input value={inputValue} onChange={this.handleChange} />
        <button onClick={this.passMsg}>Submit</button>
        <p className={alert ? "alert" : null}>{alert}</p>
        <p>Last Message Delivered</p>
        <p className="result">{returnMsg}</p>
      </div>
    );
  }
}
export default App;
