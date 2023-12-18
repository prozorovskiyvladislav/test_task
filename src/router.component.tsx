import { Routes, Route } from "react-router-dom";
import React from "react";
import RepoSearchComponent from "./pages/repo-search.component";
import FavoriteListComponent from "./pages/favorite-list.component";
import LayoutComponent from "./components/layout.component";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutComponent/>}>
            <Route path="/" element={<RepoSearchComponent/>} />
            <Route path="/favorite-list" element={<FavoriteListComponent/>} />
            </Route>
        </Routes>
    )
}

export default Router;