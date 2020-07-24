import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { Timer } from "./Timer";
import "./App.css";

interface IAppState {
  [ch: string]: number;
};

class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  public componentDidMount(): void {
    this.clearChannels();
  }

  private clearChannels(): void {
    let chList: IAppState = {};

    for (let ch: number = 0; ch < 30; ch++) {
      chList[`CH ${ch + 1}`] = 300;
    }

    this.setState(chList);
  }

  private drawChannels(): JSX.Element[] {
    return (
      Object.entries(this.state).map(([chNum, time]: [string, number]) => {
        return (
          <Timer
            key={uuid()}
            duration={time}
            text={chNum}
          />
        );
      })
    )
  }

  public render(): JSX.Element {
    return (
      <div className="channelList">
        {this.drawChannels()}
      </div>
    );
  }
}

export { App };