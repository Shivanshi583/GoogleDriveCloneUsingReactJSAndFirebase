import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Data from "./Components/Data";

function App() {
  return (
    <>
      <Header/>
      <div className="App">
        <Sidebar/>
        <Data/>
      </div>
    </>
  );
}

export default App;
