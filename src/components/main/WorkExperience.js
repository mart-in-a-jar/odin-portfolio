import styled from "styled-components";
import { StyledHeading } from "../Heading";
import { work } from "../../utils/person";
import { WorkItem } from "./WorkItem";

const Main = styled.main`
    padding: 0 12px;
    @media screen and (width >= 660px) {
        & h1 {
            text-align: left;
        }
    }
    @media screen and (width >= 770px) {
        padding: 0 70px;
    }
    @media screen and (width >= 660px) {
    }
`;
const WorkItems = styled.div`
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-content: center;
    justify-items: center;
    gap: 30px;
    @media screen and (width >= 790px) {
        gap: 50px;
    }
`;

const colors = ["#7c75ca", "#d88f39", "#5e8f4d", "#ca7599", "#4692d9"];

export const WorkExperience = () => {
    return (
        <Main>
            <StyledHeading>My work</StyledHeading>
            <WorkItems>
                {work.map((ele, i) => {
                    return (
                        <WorkItem
                            key={i}
                            name={ele.name}
                            color={colors[i % colors.length]}
                            description={ele.description}
                            url={ele.url}
                            repoUrl={ele.repoUrl}
                            image={ele.image}
                        />
                    );
                })}
            </WorkItems>
        </Main>
    );
};
