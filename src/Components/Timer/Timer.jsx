import React, { Component } from "react";
import "./Timer.css";

export default class Timer extends Component {
  state = {
    minutes: 5,
    seconds: 0,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <div className="timerCoundown">
          {minutes === 0 && seconds === 0 ? (
            <h1>
              <button type="submit">ओटीपी पुनः भेजें</button>
            </h1>
          ) : (
            <h1>
              Re-send otp in :{" "}
              <span style={{ color: "red" }}>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </span>
            </h1>
          )}
        </div>
      </div>
    );
  }
}
