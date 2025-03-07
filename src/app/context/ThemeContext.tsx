"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme : "light" | "dark";
    toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children : ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<"light" | "dark">("dark")
    
    const handleToggle = () => {
        setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light" ))
    }

    useEffect(() => {
        // Establece el atributo data-theme en <html> o <body>
        document.body.setAttribute("data-theme", theme);
      }, [theme]);

    return(
        <ThemeContext.Provider value={{theme, toggle: handleToggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error("useTheme debe usarse dentro de un ThemeProvider");
    }
    return context;
}