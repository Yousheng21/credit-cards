import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./Home/Home";
import {MainLayout} from "./common/layouts/MainLayout/MainLayout";
import {Main} from "./Home/Main/Main";
import {Cards} from "./Home/Cards/Cards";
import {AddCard} from "./AddCard/AddCard";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="credit-cards" element={<Home />}>
                        <Route path="" element={<Main />} />
                        <Route path="mycards" element={<Cards />} />
                    </Route>
                    <Route path="credit-cards/add" element={<AddCard />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;