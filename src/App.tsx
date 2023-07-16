import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Index from "./pages/Home/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Index />}></Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
