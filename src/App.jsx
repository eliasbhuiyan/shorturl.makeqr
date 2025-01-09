import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Qrcode from "./pages/Qrcode";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="qrcode" element={<Qrcode />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

