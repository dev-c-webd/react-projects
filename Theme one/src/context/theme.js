import { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode: "light",
    lightMode: () => {},
    darkMode: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

// custom hook
export default function useTheme(ThemeContext) {
    return useContext(ThemeContext);
};