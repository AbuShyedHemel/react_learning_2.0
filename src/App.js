import "./App.css";
import ComponentOne from "./components/ContexAPI/ComponentOne";
import ComponentThree from "./components/ContexAPI/ComponentThree";
import ComponentTwo from "./components/ContexAPI/ComponentTwo";
import { UserProvider } from "./components/ContexAPI/contectcomponent";
// import ClickCounter from "./components/RenderCounter/ClickCounter";
// import HoverCount from "./components/RenderCounter/HoverCounter";
// import Counter from "./components/RenderCounter/user";

function App() {
  return (
    <div>
      <UserProvider value="Hemel">

        <ComponentThree />
        <ComponentTwo />
        <ComponentOne />

      </UserProvider>
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
