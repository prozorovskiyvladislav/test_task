import React from 'react';
import { RepoWrapper, RepoItems, RepoButton } from './repo.component.styles';
import { Typography } from '@mui/material';
import { Node } from '../data/types';

type RepoProps = {
    repo: Node;
    addFavorite: (repo: Node) => void;
    removeFavorite: (repo: Node) => void;
    isFavorite: (repo: Node) => boolean;
}

const RepoComponent: React.FC<RepoProps> = ({ repo, addFavorite, removeFavorite, isFavorite }) => {
    return (
        <RepoWrapper>
            <RepoItems>
                <Typography>{repo.name} by {repo.owner.login}</Typography>
                <RepoButton variant='contained' size='small' onClick={() => (isFavorite(repo) ? removeFavorite(repo) : addFavorite(repo))}>{isFavorite(repo) ? 'Remove from Favorites' : 'Add to Favorites'}</RepoButton>
            </RepoItems>
        </RepoWrapper>
    )
}

export default RepoComponent;