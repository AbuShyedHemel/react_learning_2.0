import React from "react";
import { UserConsumer } from "./contectcomponent";

export default class ComponentTwo extends React.Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(value) => <h1>This is {value} from ComponentTwo</h1>}
        </UserConsumer>
      </div>
    );
  }
}
