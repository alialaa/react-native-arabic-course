import { Alert } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "@langs";

const FavoritesContext = createContext();

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
}

export function FavoritesProvider(props) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const loadedFavorites = await AsyncStorage.getItem("@favorites");
                if (loadFavorites !== null) {
                    setFavorites(JSON.parse(loadedFavorites));
                }
            } catch {
                // report
            }
        };
        loadFavorites();
    }, []);

    useEffect(() => {
        const saveFavorites = async () => {
            try {
                await AsyncStorage.setItem("@favorites", JSON.stringify(favorites));
            } catch {
                Alert.alert(i18n.t("errors.error"), i18n.t("errors.generalError"));
            }
        };
        if (favorites) saveFavorites();
    }, [favorites]);

    const isFavorite = location => {
        if (!location) return;
        const index = favorites.findIndex(l => l.lat === location.lat && l.lon === location.lon);
        return index !== -1;
    };

    const toggleFavorites = location => {
        const index = favorites.findIndex(l => l.lat === location.lat && l.lon === location.lon);
        if (index === -1) {
            setFavorites([...favorites, location]);
        } else {
            setFavorites(
                favorites.filter((l, i) => {
                    return i !== index;
                })
            );
        }
    };
    console.log(favorites);
    return (
        <FavoritesContext.Provider
            {...props}
            value={{
                favorites,
                isFavorite,
                toggleFavorites
            }}
        />
    );
}
