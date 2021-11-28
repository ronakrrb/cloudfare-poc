import React from "react";
import { Hello } from "@ronakrrb/cf-components";
import ReactDOM from "react-dom";

class POC extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Hello />
    );
  }
}

ReactDOM.render(
    <React.StrictMode>
        <POC />
    </React.StrictMode>,
    document.getElementById("root")
);
  