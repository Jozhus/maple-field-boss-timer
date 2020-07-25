import React from "react";
import "bootstrap/dist/css/bootstrap.css";

interface ITimerProps {
    duration: number;
    text: string;
}

interface ITimerState {
    time: number;
    interval?: NodeJS.Timeout;
};

class Timer extends React.Component<ITimerProps, ITimerState> {
    constructor(props: ITimerProps) {
        super(props);

        this.state = {
            time: 0
        };

        this.tick = this.tick.bind(this);
        this.start = this.start.bind(this);
        this.end = this.end.bind(this);
    }

    componentWillUnmount(): void {
        this.end();
    }

    private start(): void {
        this.end();
        this.setState({ time: 0, interval: setInterval(this.tick, 1000) });
    }

    private end(): void {
        if (this.state.interval) clearInterval(this.state.interval);
        this.setState({ interval: undefined });
    }

    private tick(): void {
        let newTime: number = this.state.time + 1;
        if (newTime >= this.props.duration) {
            newTime = 0;
            this.end();
        }

        this.setState({ time: newTime });
    }

    private get timeLeft(): number {
        return this.state.interval ? this.props.duration - this.state.time : 0;
    }

    private get formattedTime(): string {
        let date = new Date(0);
        date.setSeconds(this.timeLeft);
        return date.toISOString().substr(14, 5);
    }

    private get progress(): number {
        if (this.props.duration === 0 || !this.state.interval) return 100;
        return Math.floor(100 * this.state.time / this.props.duration)
    }

    public render(): JSX.Element {
        return (
            <div
                className="channelButton noselect"
                style={{ backgroundColor: this.progress < 33 ? "#FF7676" : this.timeLeft > 30 ? "#FFFF66" : this.progress < 100 ? "#9dffb0" : "#ADD8E6" }}
                onClick={() => { this.start() }}
            >
                <div className="channelText">
                    {this.props.text}
                </div>
                <div className="channelTime">
                    {this.formattedTime}
                </div>
            </div>
        );
    }
};

export { Timer };