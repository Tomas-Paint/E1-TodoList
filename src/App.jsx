import TaskForm from "./components/TaskForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Title>📌 To-Do List</Title>
      <TaskForm />
      <TodoList />
    </Container>
  );
}

export default App;


const Container = styled.div`
  text-align: center;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 15px;
`;
