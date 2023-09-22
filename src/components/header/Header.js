import { styled } from "styled-components";
import { colors } from "../../utils/colors";
import { Image } from "../Image";
import { Bio } from "./Bio";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media screen and (width >= 660px) {
        display: block;
        position: relative;
        margin: 0;
        &:before {
            content: "";
            width: 100%;
            height: 90%;
            background-color: ${colors.backgroundBlue};
            position: absolute;
            z-index: -1;
            clip-path: polygon(0% 100%, 100% 55%, 100% 0%, 0% 0%);
        }
    }
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
    @media screen and (width >= 660px) {
        float: left;
    }
`;

const ImageContainer = styled.div`
    padding: 35px;
    position: relative;
    @media screen and (width >= 660px) {
        padding: 0;
        aspect-ratio: 1;
        width: 40vw;
        margin: -85px 20px 20px 35px;
    }
`;

const NameHeading = styled.h1`
    color: ${colors.white};
    position: absolute;
    bottom: 45px;
    text-shadow: 1px 1px 5px black;
    margin: 0 35px 0 15px;
    font-size: 4.2rem;
    @media screen and (width >= 660px) and (width < 990px) {
        min-width: 150%;
        top: 10px;
        transform: translateX(-70px);
        display: inline;
        font-size: 3rem;
    }
    @media screen and (width >= 990px) {
     bottom: 0;   
    }
`;

export const Header = ({ name, image, bioText }) => {
    return (
        <StyledHeader>
            <Bio text={bioText}>
                <Cover>
                    <ImageContainer>
                        <Image imagePath={image} altText={name} />
                        <NameHeading>{name}</NameHeading>
                    </ImageContainer>
                </Cover>
            </Bio>
        </StyledHeader>
    );
};
