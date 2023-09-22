import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./img/github.svg";
import { ReactComponent as LinkedinIcon } from "./img/linkedin.svg";
import { ReactComponent as TwitterIcon } from "./img/twitter.svg";

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 35px;
    & a {
        width: 40px;
        height: 40px;
    }
    @media screen and (width >= 660px) {
        justify-content: flex-start;
    }
`;

export const SocialIcons = () => {
    return (
        <Container>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
                <GithubIcon />
            </a>
            <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
            >
                <LinkedinIcon />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <TwitterIcon />
            </a>
        </Container>
    );
};
