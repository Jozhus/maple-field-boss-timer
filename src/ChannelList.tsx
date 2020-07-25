import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { Timer } from "./Timer";

interface IChannelListProps {
    name: string;
    duration: number;
};

interface IChannelList {
    numberOfChannels: number;
    channels: JSX.Element[];
};

class ChannelList extends Component<IChannelListProps, IChannelList> {
    constructor(props: IChannelListProps) {
        super(props);

        this.state = {
            numberOfChannels: 30,
            channels: []
        };
    }

    public componentDidMount(): void {
        const channels: JSX.Element[] = [];

        for (let i: number = 0; i < this.state.numberOfChannels; i++) {
            channels.push(
                <Timer
                    key={uuid()}
                    duration={this.props.duration}
                    text={`CH ${i + 1}`}
                />
            );
        }

        this.setState({ channels });
    }

    public render(): JSX.Element {
        return (
            <div className="channelList">
                <h1>{this.props.name}</h1>
                <div>
                    {this.state.channels}
                </div>
            </div>
        );
    }
}

export { ChannelList };