import styled from "styled-components";
import {Container, TextField, CircularProgress} from "@mui/material";

export const RepoSearchWrapper = styled(Container)`
padding: 32px;
max-width: 600px;
margin: 64px auto;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
export const RepoSearchTitle = styled.h1``;
export const RepoSearchDescription = styled.p`
font-size: 12px;
margin:12px 0;
`;
export const RepoSearchInput = styled(TextField)`

`;
export const RepoSearchResult = styled.div``;
export const RepoSearchLoading = styled(CircularProgress)`
`;
export const RepoSearchListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;