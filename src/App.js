import { styled } from "styled-components";
import { Header } from "./components/Header";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

function App() {
    return (
        <AppContainer>
            <Header name="Ashley Williams" />
            <main>Main</main>
            <footer>Footer</footer>
        </AppContainer>
    );
}

export default App;
