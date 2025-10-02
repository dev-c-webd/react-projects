import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/Theme';

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = ()=>{
    setThemeMode("light");
  }
  const darkMode = ()=>{
    setThemeMode("dark");
  }

  // change in theme and everytime it will run when theme changes
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  
  return (

    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                     
          </div>

          <div className="w-full max-w-sm mx-auto">
                       
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App