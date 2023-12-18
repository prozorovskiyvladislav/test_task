import React from "react";
import { Repo, Node } from "../data/types";
import RepoComponent from "./repo.component";

type RepoSearchListProps = Repo & {
    addFavorite: (repo: Node) => void;
    removeFavorite: (repo: Node) => void;
    isFavorite: (repo: Node) => boolean;
}
const RepoSearchList: React.FC<RepoSearchListProps> = ({repositories, addFavorite, removeFavorite, isFavorite}) => {
    return (
        <>
        {repositories.map((repo) => (<RepoComponent repo={repo.node} key={repo.node.id} addFavorite={addFavorite} removeFavorite={removeFavorite} isFavorite={isFavorite}/>))}
        </>
    )
}

export default RepoSearchList;