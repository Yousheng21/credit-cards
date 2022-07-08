import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "./Home/Home";
import {MainLayout} from "./common/layouts/MainLayout/MainLayout";

function App() {
  return (
      <BrowserRouter>
          <MainLayout>
              <Routes>
                  <Route path="credit-cards" element={<Home />}>
                      <Route path="" element={<span>Main</span>} />
                      <Route path="cards" element={<span>Cards</span>} />
                  </Route>
                  <Route path="credit-cards/add" element={<span>AddCard</span>} />
              </Routes>
          </MainLayout>
      </BrowserRouter>
  );
}

export default App;