import React, {useCallback, useMemo} from 'react';
import {  useLazyQuery } from '@apollo/client';
import { SEARCH_REPOSITORIES } from '../api/queries';
import { debounce } from '../utils';
import RepoSearchList from '../components/repo-search-list.component';
import { RepoSearchWrapper, RepoSearchInput, RepoSearchTitle, RepoSearchDescription, RepoSearchListWrapper, RepoSearchLoading } from './repo-search.component.styles';
import useFavorites from '../hook/useFavorite';

const RepoSearchComponent: React.FC = () => {
    const [searchRepositories, { loading, data }] = useLazyQuery(SEARCH_REPOSITORIES);
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const debouncedSearch = useCallback(debounce((query: string) => {
        searchRepositories({ variables: { query } });
      }, 2000), []);

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => {
        debouncedSearch(e.target.value);
    }

    const repositories = useMemo(() => {
        return data?.search?.edges || [];
    }, [data]);
    
    return (
        <RepoSearchWrapper>
            <RepoSearchTitle>Search your repo</RepoSearchTitle>
            <RepoSearchDescription>You can mark repo as favorite</RepoSearchDescription>
            <RepoSearchInput 
                onChange={e => onHandleChange(e)}
                label="Search Repositories"
                variant="outlined"
                size="small"
            ></RepoSearchInput>
            {loading && <RepoSearchLoading />}
            <RepoSearchListWrapper>
            <RepoSearchList
             repositories={repositories} 
             addFavorite={addFavorite} 
             removeFavorite={removeFavorite} 
             isFavorite={isFavorite}  
             />
             </RepoSearchListWrapper>
        </RepoSearchWrapper>
    )
}

export default RepoSearchComponent;