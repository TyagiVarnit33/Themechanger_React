import { useEffect, useState } from "react";
import useTheme, { ThemeProvider } from "./context/theme.jsx";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/card";

function App() {
   const { isdark, lighttheme, darktheme } = useTheme();

   console.log("from app.js", isdark);

  return (
      <div className={`flex flex-wrap min-h-screen items-center bg-${isdark ? "black" : "white"}`}>
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
  );
}

export default App;
