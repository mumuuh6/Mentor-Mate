import { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Create a context for theme
export const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  // Check if the user has a saved theme in localStorage
  const storedTheme = localStorage.getItem("theme") || "light";

  const [mode, setMode] = useState(storedTheme);

  // Define the theme based on the mode (light/dark)
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        ...(mode === "light"
          ? {
              background: { default: "#ffffff", paper: "#f5f5f5" },
              text: { primary: "#000000" },
            }
          : {
              background: { default: "#000000", paper: "#1E1E1E" },
              text: { primary: "#ffffff" },
            }),
      },
    }), [mode]);

  // Function to toggle theme
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Ensures background and text colors switch */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
