/** Based on '@ecancino' theme engine (https://stackblitz.com/edit/theme-engine-react) */
import React, { createContext, useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { getSavedData } from "../../utils/Utils";
import Floatie from '../../components/fab/Floatie';

/** Themes that apply to css classes in the index.css file. */
const themes = {
    Dark: {
        primary: "#dddddd",
        separatorColor: "rgba(255,255,255,0.20)",
        textColor: "white",
        backgroundColor: "#121212",
        buttonColor: "rgba(255,255,255,0.05)",
        blockquoteColor: "rgba(255,255,255,0.20)",

    },
    Light: {
        primary: "#999999",
        separatorColor: "rgba(0,0,0,0.08)",
        textColor: "black",
        backgroundColor: "white",
        buttonColor: "#f6f6f6",
        blockquoteColor: "rgba(0,0,0,0.80)",
    },
    Chaeban: {
        backgroundColor: "#F3827C",
    },
    Gradient: {
        backgroundColor: 'linear-gradient(to right, #2b5876, #4e4376)'
    }
};

const setCSSVariables = theme => {
    for (const value in theme) {
        document.documentElement.style.setProperty(`--${value}`, theme[value]);
    }
};
export const ThemeSelectorContext = createContext({
    themeName: getSavedData().theme,
    toggleTheme: () => { }
});

export default ({ children }) => {

    const [themeName, setThemeName] = useState(getSavedData().theme);
    const [theme, setTheme] = useState(themes[themeName]);

    /** These themes are for the ThemeProvider for the style of material ui elements. */
    const selTheme = createMuiTheme({
        palette: {
            type: themeName === 'Dark' ? 'dark' : themeName === 'Default' ? 'light' : themeName === 'Chaeban' ? '' : null
        },
    });
    const chaTheme = createMuiTheme({
        palette: {
            primary: {
                main: "#427a80",
            },
            secondary: {
                main: '#74ced6',
            },
            background: {
                paper: '#52989e'
            },
            text: {
                primary: '#fff', 
            },
            action: {
                active: "#fff"
            }
        },
    });
    const gradTheme = createMuiTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            secondary: {
                main: '#fff',
            },
            background: {
                paper: '#596b9c'
            },
            text: {
                primary: '#fff', 
            },
            action: {
                active: "#fff"
            }
        },
    });
    const fabTheme = createMuiTheme({
        palette: {
            type: 'light'
        }
    });
    /** Method override for changing themes, a 'useEffect' is used to apply the theme. */
    const toggleTheme = (newTheme) => {
        switch (newTheme) {
            case "Dark":
                setTheme(themes.Dark);
                setThemeName("Dark");
                break;
            case "Chaeban":
                setTheme(themes.Chaeban);
                setThemeName("Chaeban");
                break;
            case "Gradient":
                setTheme(themes.Gradient);
                setThemeName("Gradient");
                break;
            default:
                setTheme(themes.Light);
                setThemeName("Default");
                break;
        }
    };

    useEffect(() => {
        setCSSVariables(theme);
    });

    return (
        <ThemeProvider theme={themeName === 'Dark' ? selTheme : themeName === 'Default' ? selTheme : themeName === 'Chaeban' ? chaTheme : gradTheme}>
            <ThemeSelectorContext.Provider value={{ themeName, toggleTheme }}>
                {children}
            </ThemeSelectorContext.Provider>
            <ThemeProvider theme={fabTheme}>
                <Floatie />
            </ThemeProvider>
        </ThemeProvider>
    );
};
