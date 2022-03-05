import { AppSetup } from "@components";
import { Navigator } from "@config";
import { SettingsProvider, LocationProvider } from "@contexts";

export default function App() {
    return (
        <SettingsProvider>
            <AppSetup>
                <LocationProvider>
                    <Navigator />
                </LocationProvider>
            </AppSetup>
        </SettingsProvider>
    );
}
