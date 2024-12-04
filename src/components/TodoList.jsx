import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
    margin: 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ClearButton = styled(Button)`
  background-color: #f44336;
  margin-top: 10px;
  width: 100%;
  

  &:hover {
    background-color: #d32f2f;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Task = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  button {
    max-width: 100%;
    background-color: #f44336;
    border: none;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Función para agregar tarea
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Función para eliminar tarea individual
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Función para eliminar todas las tareas
  const clearAllTasks = () => {
    setTasks([]); 
  };

  return (
    <Container>
      <Title>Nuctasks</Title>
      <InputContainer>
        <Input
          type="text"
          placeholder="Escribe una tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button onClick={addTask}>Agregar</Button>
      </InputContainer>
      <TaskList>
        {tasks.map((task, index) => (
          <Task key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </Task>
        ))}
      </TaskList>
      {tasks.length > 1 && <ClearButton onClick={clearAllTasks}>Borrar todas las tareas</ClearButton>}
    </Container>
  );
};

export default TodoList;
