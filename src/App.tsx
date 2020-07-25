import React, { Component } from "react";
import { ChannelList } from "./ChannelList";
import { v4 as uuid } from "uuid";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import "./App.css";

interface IAppState {
  dropDownOpen: boolean;
  tracks: JSX.Element[];
};

class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      dropDownOpen: false,
      tracks: []
    };

    this.createTrack = this.createTrack.bind(this);
  }

  private createTrack(name: string, duration: number): void {
    const newTracks: JSX.Element[] = [...this.state.tracks];

    newTracks.push(<ChannelList key={uuid()} name={name} duration={duration} />);

    this.setState({ tracks: newTracks });
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.dropDownOpen}
          toggle={() => { this.setState({ dropDownOpen: !this.state.dropDownOpen }) }}
        >
          <DropdownToggle caret>
            Add a boss
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => { this.createTrack("Deo (Ground)", 300) }}
            >
              Deo (5 minutes)
            </DropdownItem>
            <DropdownItem
              onClick={() => { this.createTrack("Deo (Platform)", 1500) }}
            >
              Deo (25 minutes)
            </DropdownItem>
            <DropdownItem
              onClick={() => { this.createTrack("Snow Witch", 600) }}
            >
              Snow Witch (10 minutes)
            </DropdownItem>
            <DropdownItem
              onClick={() => { this.createTrack("Stumpy", 900) }}
            >
              Stumpy (15 minutes)
            </DropdownItem>
            <DropdownItem
              onClick={() => { this.createTrack("Dodo", 300) }}
            >
              Dodo (5 minutes)
            </DropdownItem>
            <DropdownItem
              onClick={() => { this.createTrack("Lilynouch", 300) }}
            >
              Lilynouch (5 minutes)
            </DropdownItem>
            <DropdownItem
              onClick={() => { this.createTrack("Lyka", 300) }}
            >
              Lyka (5 minutes)
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <hr />
        <div className="trackList">
          {this.state.tracks}
        </div>
        {/*<div className="info">
          <div>
            <h1>Some Info</h1>
            <p>Deo has two spawns:</p>
            <ul>
              <li>One on the floor at the bottom right of the map with a 5 minute respawn timer.</li>
              <li>One on the right-most 2nd platform from the top with a 25 minute respawn timer.</li>
            </ul>
            <p>Snow Witch has a 10 minute respawn timer and can spawn on the left or right side of the map.</p>
            <p>Stumpy has a 15 minutes respawn timer.</p>
            <p>All 3 ToT bosses have a 5 minute respawn timer.</p>
          </div>
        </div>*/}
      </React.Fragment>
    );
  }
}

export { App };