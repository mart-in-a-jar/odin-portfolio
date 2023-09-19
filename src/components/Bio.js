import styled from "styled-components";
import { SocialIcons } from "./SocialIcons";

const BioText = styled.p`
    line-height: 1.4em;
    font-size: 1.2rem;
`;

const StyledHeader = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 2.5rem;
`;

const StyledBio = styled.section`
    margin: 5px 12px;
`;

export const Bio = ({ text }) => {
    return (
        <StyledBio>
            <StyledHeader>About me</StyledHeader>
            <BioText>{text}</BioText>
            <SocialIcons />
        </StyledBio>
    );
};
