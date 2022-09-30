import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout.js/DefaultLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
