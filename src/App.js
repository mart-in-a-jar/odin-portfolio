import { styled } from "styled-components";
import { Header } from "./components/Header";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const bioText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate quidem autem deserunt asperiores neque harum sint ab quod voluptatem minima ipsum tempore, libero aperiam in fugiat illo veniam possimus.";

function App() {
    return (
        <AppContainer>
            <Header
                name="Ashley Williams"
                image={
                    "v1693484600/Testmappe/pexels-mikhail-nilov-6592676_nbgeg8.jpg"
                }
                bioText={bioText}
            />
            <main>Main</main>
            <footer>Footer</footer>
        </AppContainer>
    );
}

export default App;
