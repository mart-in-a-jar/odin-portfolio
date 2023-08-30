import { styled } from "styled-components";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

function App() {
    return (
        <AppContainer>
            <header>Header</header>
            <main>Main</main>
            <footer>Footer</footer>
        </AppContainer>
    );
}

export default App;
