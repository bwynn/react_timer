const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
    };
  },

  handleSetCountdown: function (seconds) {
    debugger;
    this.setState({
      count: seconds,
    });
  },

  render: function () {
    let { count } = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  },
});

module.exports = Countdown;
