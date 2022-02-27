import { useState } from "react";
import { AppSetup } from "@components";
import { Navigator } from "@config";
import { SettingsContext } from "@contexts";

export default function App() {
    const [settings, setSettings] = useState({
        lang: "ar",
        units: "metric",
        colorScheme: "auto"
    });
    return (
        <SettingsContext.Provider
            value={{
                settings,
                setSettings
            }}
        >
            <AppSetup>
                <Navigator />
            </AppSetup>
        </SettingsContext.Provider>
    );
}
