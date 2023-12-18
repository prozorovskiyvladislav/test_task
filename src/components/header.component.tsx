import React from "react";
import { HeaderWrapper, HeaderContainer, HeaderItem } from "./header.component.styles";
import { Link } from 'react-router-dom'

const HeaderComponent: React.FC = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderItem component={Link} to="/">Search</HeaderItem>
                <HeaderItem component={Link} to="/favorite-list">Favorite</HeaderItem>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default HeaderComponent;