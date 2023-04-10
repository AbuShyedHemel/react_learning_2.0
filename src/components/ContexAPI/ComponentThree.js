import React from "react";
import { UserConsumer } from "./contectcomponent";

export default class ComponentThree extends React.Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {(value)=>(
                <h1>This is {value} from ComponentThree</h1>
            )}
        </UserConsumer>
        
      </div>
    );
  }
}
