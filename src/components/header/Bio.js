import styled from "styled-components";
import { SocialIcons } from "../SocialIcons";
import { StyledHeading } from "../Heading";

const BioText = styled.p`
    line-height: 1.4em;
    font-size: 1.2rem;
`;

const StyledBio = styled.section`
    padding: 5px 12px;
`;

export const Bio = ({ text }) => {
    return (
        <StyledBio>
            <StyledHeading>About me</StyledHeading>
            <BioText>{text}</BioText>
            <SocialIcons />
        </StyledBio>
    );
};
