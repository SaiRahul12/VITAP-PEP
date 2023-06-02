import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LoginPage2 from "./pages/LoginPage2";
import Dashboard3 from "./pages/Dashboard3";
import Dashboard2 from "./pages/Dashboard2";
import Dashboard1 from "./pages/Dashboard1";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page2":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard3":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard2":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard1":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login-page2" element={<LoginPage2 />} />
      <Route path="/dashboard3" element={<Dashboard3 />} />
      <Route path="/dashboard2" element={<Dashboard2 />} />
      <Route path="/dashboard1" element={<Dashboard1 />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
