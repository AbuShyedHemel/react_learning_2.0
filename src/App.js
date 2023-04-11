import { useEffect, useState } from "react";
import "./App.css";
// import ComponentOne from "./components/ContexAPI/ComponentOne";
// import ComponentThree from "./components/ContexAPI/ComponentThree";
// import ComponentTwo from "./components/ContexAPI/ComponentTwo";
// import { UserProvider } from "./components/ContexAPI/contectcomponent";
//import ToDo from "./components/Hook/ToDo";
//import MyComponent from "./components/Hook/sample";
import MyToDo from "./components/Hook/useeffecthook";
// import ClickCounter from "./components/RenderCounter/ClickCounter";
// import HoverCount from "./components/RenderCounter/HoverCounter";
// import Counter from "./components/RenderCounter/user";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {/* <UserProvider value="Hemel">

        <ComponentThree />
        <ComponentTwo />
        <ComponentOne />

      </UserProvider> */}
      {/* <ToDo></ToDo> */}

      <div>{show && <MyToDo></MyToDo>}</div>
      <p><button type="button" onClick={() => setShow((preshow) => !preshow)}>
        {show ? "Hide" : "Show Post"}
      </button>
      </p>

      {/* <Counter>
        {(renderCounter, renderincrementCount) => (
          <ClickCounter
            counter={renderCounter}
            incrementCount={renderincrementCount}
          />
        )}
      </Counter>
      <Counter>
        {(renderCounter, renderincrementCount) => (
          <HoverCount
            counter={renderCounter}
            incrementCount={renderincrementCount}
          />
        )}
      </Counter> */}
    </div>
  );
}
export default App;
