import React, { useEffect, useState } from "react";
import { FavoriteListWrapper, FavoriteListTitle, FavoriteListDescription, FavoriteListRepos } from "./favorite-list.component.styles";
import RepoComponent from "../components/repo.component";
import useFavorites from '../hook/useFavorite';


const FavoriteListComponent: React.FC = () => {
    const [favoriteList, setFavoriteList] = useState([]);
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    useEffect(() => {
        let favorites = localStorage.getItem('favorites');
        if(favorites !== null) {
            return setFavoriteList(JSON.parse(favorites)) 
        }
        setFavoriteList([]);
    }, [])
    
    return (
        <FavoriteListWrapper>
            <FavoriteListTitle>List of favorite repos</FavoriteListTitle>
            <FavoriteListDescription>This list represent items which you marked as favorite in search</FavoriteListDescription>
            <FavoriteListRepos>
                {favoriteList.map(fav => <RepoComponent repo={fav} addFavorite={addFavorite} removeFavorite={removeFavorite} isFavorite={isFavorite} />)}
            </FavoriteListRepos>
        </FavoriteListWrapper>
    )
}

export default FavoriteListComponent;