import { styled } from "styled-components";
import { Header } from "./components/header/Header";
import { WorkExperience } from "./components/main/WorkExperience";
import { Footer } from "./components/footer/Footer";
import { personal } from "./utils/person";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
`;

function App() {
    return (
        <AppContainer>
            <Header
                name={personal.name}
                image={personal.images.header}
                bioText={personal.bio}
            />
            <WorkExperience />
            <Footer
                image={personal.images.footer}
                contactInfo={personal.contactInfo}
            />
        </AppContainer>
    );
}

export default App;
