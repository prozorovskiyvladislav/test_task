import styled from "styled-components";
import { Link } from "@mui/material";


export const HeaderWrapper = styled.header`
    height: 72px;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    display: flex;
    align-items: center;
`;
export const HeaderContainer = styled.div`
    max-width: 1220px;
    display: flex;
    padding: 0 32px;
    gap: 16px;
`;
export const HeaderItem = styled(Link)`
    &:hover {
        cursor: pointer;
    }
`