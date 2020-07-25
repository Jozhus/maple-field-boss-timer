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
      <React.Fragment>
        <div className="channelList">
          {this.drawChannels()}
        </div>
        <hr />
        <div>
          <h1>Some Info</h1>
          <p>Deo has two spawns:</p>
          <ul>
            <li>One on the floor at the bottom right of the map with a 5 minute respawn timer.</li>
            <li>One on the right-most 2nd platform from the top with a 25 minute respawn timer.</li>
          </ul>
          <p>Ice Witch has a 10 minute respawn timer and can spawn on the left or right side of the map.</p>
          <p>Stumpy has a 15 minutes respawn timer.</p>
          <p>All 3 ToT bosses have a 5 minute respawn timer.</p>
        </div>
      </React.Fragment>
    );
  }
}

export { App };