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
    return (
        <FavoritesContext.Provider
            {...props}
            value={{
                favorites
            }}
        />
    );
}
