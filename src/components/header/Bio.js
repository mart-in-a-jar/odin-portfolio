import styled from "styled-components";
import { SocialIcons } from "../SocialIcons";
import { StyledHeading } from "../Heading";
import { colors } from "../../utils/colors";

const BioText = styled.p`
    line-height: 1.4em;
    font-size: 1.2rem;
`;

const StyledBio = styled.section`
    padding: 5px 12px;
    background-color: ${colors.white};
    @media screen and (width >= 660px) {
        padding: 35px 25px;
        margin: 120px 35px 0 100px;
        max-width: 90%;
        box-shadow: 2px 2px 5px 1px #22222230;
    }
`;

const Wrapper = styled.div`
    padding-bottom: 5px;
    max-width: 1500px;
`;

export const Bio = ({ text, children }) => {
    return (
        <Wrapper>
            {children}
            <StyledBio>
                <StyledHeading>About me</StyledHeading>
                <BioText>{text}</BioText>
                <SocialIcons />
            </StyledBio>
        </Wrapper>
    );
};
