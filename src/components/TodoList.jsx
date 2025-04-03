import { useSelector, useDispatch } from "react-redux";
import { removeTask, clearTasks } from "../redux/taskSlice";
import styled from "styled-components";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <Container>
      <h2>📋 Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <Message>No hay tareas pendientes</Message>
      ) : (
        <TaskList>
          {tasks.map((task) => (
            <TaskItem key={task.id}>
              {task.text}
              <DeleteButton onClick={() => dispatch(removeTask(task.id))}>🗑</DeleteButton>
            </TaskItem>
          ))}
        </TaskList>
      )}
      {tasks.length > 0 && (
        <ClearButton onClick={() => dispatch(clearTasks())}>❌ Borrar todas</ClearButton>
      )}
    </Container>
  );
};

export default TodoList;

// Styled Components
const Container = styled.div`
  text-align: center;
`;

const Message = styled.p`
  color: #777;
  font-size: 14px;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TaskItem = styled.li`
  background: #f9f9f9;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: red;

  &:hover {
    color: darkred;
  }
`;

const ClearButton = styled.button`
  margin-top: 10px;
  padding: 8px 15px;
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: darkred;
  }
`;