import "./index.css";
import "./App.css";
import { Reveil } from "./components/Reveil";
import { ContextProvider } from "./components/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <Reveil />
      </ContextProvider>
    </>
  );
}

export default App;
