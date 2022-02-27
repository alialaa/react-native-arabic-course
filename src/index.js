import { AppSetup } from "@components";
import { Navigator } from "@config";
import { SettingsProvider } from "@contexts";

export default function App() {
    return (
        <SettingsProvider>
            <AppSetup>
                <Navigator />
            </AppSetup>
        </SettingsProvider>
    );
}
