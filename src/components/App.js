import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "./Home/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="credit-cards/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;