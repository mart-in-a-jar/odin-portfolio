import { styled } from "styled-components";
import { colors } from "../utils/colors";
import { Image } from "./Image";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    position: relative;
    overflow: hidden;
    &:before {
        content: "";
        width: 100%;
        height: 100%;
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

const NameHeader = styled.h1`
    color: ${colors.nameHeading};
    position: absolute;
    bottom: 0;
    text-shadow: 1px 1px 5px black;
    margin: 0 15px;
    font-size: 4.2rem;
`;

export const Header = ({ name }) => {
    return (
        <StyledHeader>
            <ImageContainer>
                <Image
                    imagePath={
                        "v1693484600/Testmappe/pexels-mikhail-nilov-6592676_nbgeg8.jpg"
                    }
                    altText="Ashley Williams"
                />
                <NameHeader>{name}</NameHeader>
            </ImageContainer>

            {/* <div>
                <h2>About me</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque suscipit officia necessitatibus labore voluptatum! Ab
                    voluptas obcaecati nulla excepturi eius debitis fuga,
                    quibusdam explicabo repellendus quod, hic voluptate sequi
                    laboriosam!
                </p>
            </div> */}
        </StyledHeader>
    );
};
