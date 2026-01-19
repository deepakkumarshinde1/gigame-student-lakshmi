import { Component, PureComponent } from "react";

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      counter: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      text: props.text,
      ...state,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  shouldComponentUpdate() {}

  componentDidCatch() {}

  render() {
    return (
      <>
        <h1>Hello, {this.props.text}</h1>
      </>
    );
  }
}

export default Input;
