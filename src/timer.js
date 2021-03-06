import React from 'react';

export class Countdown extends React.Component{
    state = {
        minutes: 10,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    render(){
        const { minutes, seconds } = this.state;
        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? (<div>
                        <h2>Times Up! Your score was {this.props.score}</h2>
                        <h2>Click reset to try again!</h2>
                        <button name = "reset" onClick={e => this.props.onClick(e.target.name)}>Reset
      </button>
                      </div>)
                    : <h2>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
                }
            </div>
        )
    }
}