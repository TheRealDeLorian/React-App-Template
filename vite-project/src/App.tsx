import AppNav from "./AppNav.tsx";
import Home from "./pages/Home.tsx";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary.tsx";
import { Toaster } from "react-hot-toast";
import About from "./pages/About.tsx";

function App() {
  return (
    <div>
      <Toaster />
      <AppNav />
      <ErrorBoundary fallback={<div>Oops! An error has occurred.</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;