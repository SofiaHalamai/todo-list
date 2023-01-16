import { TodoPage } from './components/TodoPage';
import { StyledEngineProvider } from '@mui/material/styles';
import { Main } from "./App.styled";

export const App: React.FC = () => {
    
    return (
        <StyledEngineProvider injectFirst>
            <Main>
                <TodoPage />
            </Main>
        </StyledEngineProvider>
    )
}