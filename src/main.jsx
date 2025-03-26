import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ToastProvider } from "./context/ToastContext"; // ✅ Import ToastProvider

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true); // Control loader visibility

  return (
    <BrowserRouter>
      <ToastProvider>
        {isLoading && (
          // Show loader only if App is not ready
          <div id="preloader" className="preload-container">
            <div className="loader-wrapper">
              <div className="spinner"></div>
            </div>
          </div>
        )}
        <App setIsLoading={setIsLoading} /> {/* Pass setIsLoading to App */}
      </ToastProvider>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>
);
