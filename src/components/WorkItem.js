import styled from "styled-components";
import { colors } from "../utils/colors";
import { ReactComponent as GithubIcon } from "./img/github.svg";
import { ReactComponent as LinkIcon } from "./img/link.svg";
import { Image } from "./Image";

const WorkItemContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 300px 180px;
    box-shadow: 1px 1px 5px 1px #22222250;
`;

const Photo = styled.div`
    background-color: ${(props) => props.color};
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    text-align: center;
    position: relative;
    & span {
        padding: 20px;
    }
    & img {
        position: absolute;
        inset: 0;
        outline: 1px solid #22222210;
    }
`;

const ProjectHeading = styled.div`
    display: flex;
    justify-content: space-between;
    max-height: 75px;
    & h2 {
        overflow: hidden;
        margin: 5px 15px 15px;
        word-break: break-all;
    }
    & div {
        display: flex;
        align-items: center;
        gap: 20px;
        & a {
            width: 30px;
        }
    }
`;

const ProjectBody = styled.div`
    margin: 15px;
    overflow: hidden;
`;

const Description = styled.p`
    margin: 0;
    white-space: pre-line;
`;

export const WorkItem = ({ image, name, description, color, url, repoUrl }) => {
    return (
        <WorkItemContainer>
            <Photo color={color}>
                {image && <Image imagePath={image} size={{ width: 900 }} />}
                <span>screenshot of project</span>
            </Photo>
            <ProjectBody>
                <ProjectHeading>
                    <h2>{name}</h2>
                    <div>
                        <a href={repoUrl} target="_blank" rel="noreferrer">
                            <GithubIcon />
                        </a>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <LinkIcon />
                        </a>
                    </div>
                </ProjectHeading>
                <Description>{description}</Description>
            </ProjectBody>
        </WorkItemContainer>
    );
};
