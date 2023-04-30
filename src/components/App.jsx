import React, {Component} from "react";

export class App extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
  };

  onReviewGood = () => this.setState({ good: this.state.good + 1 });
  onReviewNeutral = () => this.setState({ neutral: this.state.neutral + 1 });
  onReviewBad = () => this.setState({ bad: this.state.bad + 1 });

  countTotalFeedback() {
    this.setState({
      total: this.state.good + this.state.neutral + this.state.bad,
    });
  };
  
  render() {
    const { good, neutral, bad, total } = this.state;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={this.onReviewGood}>Good</button>
        <button onClick={this.onReviewNeutral}>Neutral</button>
        <button onClick={this.onReviewBad}>Bad</button>

        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
      </div>
    )
  }
};
