import React, { component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Winners from "./Winners";

export default class Mongocon extends React.Component {
  constructor(props) {
    super(props);
    this.getWinners = this.getWinners.bind(this);
    this.state = {
      winners: []
    };
  }

  getWinners() {
    let pattern = ReactDOM.findDOMNode(this.refs.myInput).value;
    axios.get("http://localhost:5432/winners/all/" + pattern).then(res => {
      const winners = res.data;
      this.setState({ winners });
      console.log(winners);
      //   .catch(e => {
      //       alert("error message is"+e);
    });
  }

  render() {
    let code = this.state.winners.map(x => (
      <Winners key={x.id} winner={x}></Winners>
    ));
    return (
      <div>
        Enter Scientist
        <input onKeyUp={this.getWinners} ref="myInput" />
        {code}
      </div>
    );
  }
}
