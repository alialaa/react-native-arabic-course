import { createContext, useState, useContext } from "react";

export const SettingsContext = createContext();

export function useSettings() {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used withing a SettingsProvider");
    }
    return context;
}

export function SettingsProvider(props) {
    const [settings, setSettings] = useState({
        lang: "ar",
        units: "metric",
        colorScheme: "auto"
    });
    return (
        <SettingsContext.Provider
            {...props}
            value={{
                settings,
                setSettings: newSettings => {
                    setSettings({ ...settings, ...newSettings });
                }
            }}
        />
    );
}
