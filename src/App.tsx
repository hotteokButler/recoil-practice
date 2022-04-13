import styled from 'styled-components';
import { GlobalStyle } from './common/reset';
import CreateTodos from './components/createToDos';
import TodoList from './components/toDolist';

const Container = styled.div`
  width: 95%;
  max-width: 500px;
  margin: 0 auto;
`;
const TodoTitle = styled.h1`
  margin: 0.5em auto;
  text-align: center;
  font-size: 2.5em;
  color: ${(props) => props.theme.accentColor};
`;
const TodoInputSection = styled.section`
  margin: 0 0 20px;
`;
const TodoListSection = styled.section``;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <TodoTitle>ToDolist</TodoTitle>
      <TodoInputSection>
        <CreateTodos />
      </TodoInputSection>
      <TodoListSection>
        <TodoList />
      </TodoListSection>
    </Container>
  );
}

export default App;
