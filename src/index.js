import { AppSetup } from "@components";
import { Navigator } from "@config";
import { SettingsProvider, LocationProvider, FavoritesProvider } from "@contexts";

export default function App() {
    return (
        <SettingsProvider>
            <AppSetup>
                <LocationProvider>
                    <FavoritesProvider>
                        <Navigator />
                    </FavoritesProvider>
                </LocationProvider>
            </AppSetup>
        </SettingsProvider>
    );
}
