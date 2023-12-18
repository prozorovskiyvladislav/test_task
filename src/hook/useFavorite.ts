import { useState, useEffect } from 'react';
import { Node } from '../data/types';

const useFavorites = () => {
  const [favoriteList, setFavoriteList] = useState<Node[]>([]);

  useEffect(() => {
    let favorites = localStorage.getItem('favorites');
    if (favorites !== null) {
      return setFavoriteList(JSON.parse(favorites))
    }
    setFavoriteList([]);
  }, []);

  const addFavorite = (repo: Node) => {
    const updatedFavorites = [...favoriteList, repo];
    setFavoriteList(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (repo: Node) => {
    const updatedFavorites = favoriteList.filter((fav) => fav.id !== repo.id);
    setFavoriteList(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (repo: Node) => favoriteList.some((fav) => fav.id === repo.id);

  return {
    favoriteList,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};

export default useFavorites;