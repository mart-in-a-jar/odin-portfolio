import { styled } from "styled-components";
import { colors } from "../utils/colors";
import { Image } from "./Image";
import { Bio } from "./Bio";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    overflow: hidden;
`;

const Cover = styled.div`
    position: relative;
    &:before {
        content: "";
        width: 100%;
        height: 90%;
        background-color: ${colors.backgroundBlue};
        position: absolute;
        z-index: -1;
        clip-path: polygon(0% 100%, 100% 55%, 100% 0%, 0% 0%);
    }
`;

const ImageContainer = styled.div`
    margin: 35px;
    position: relative;
`;

const NameHeading = styled.h1`
    color: ${colors.white};
    position: absolute;
    bottom: 0;
    text-shadow: 1px 1px 5px black;
    margin: 0 15px;
    font-size: 4.2rem;
`;

export const Header = ({ name, image, bioText }) => {
    return (
        <StyledHeader>
            <Cover>
                <ImageContainer>
                    <Image imagePath={image} altText={name} />
                    <NameHeading>{name}</NameHeading>
                </ImageContainer>
            </Cover>
            <Bio text={bioText} />
        </StyledHeader>
    );
};
