import  { useEffect, useState } from "react";

import "@/App.css";
import AppRoutes from "./routes";
import { AppProvider } from "./provider";
import { keepTheme } from "./utils/theme";
function App() {
  // (AppRoutes())
  const [className, setClassName] = useState("theme-dark");
  useEffect(() => {
    keepTheme(setClassName);
  }, []);
  return (
    <div className="text-text-main  min-h-screen">
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
