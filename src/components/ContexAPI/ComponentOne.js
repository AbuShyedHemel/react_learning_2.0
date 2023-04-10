import React from "react";
import { UserConsumer } from "./contectcomponent";

export default class ComponentOne extends React.Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(value) => <h1>This is {value} from ComponentOne</h1>}
        </UserConsumer>
      </div>
    );
  }
}
