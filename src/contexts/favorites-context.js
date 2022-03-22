import { createContext, useContext, useEffect, useState } from "react";

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
