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
  margin-bottom: 10px;

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

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: 5px 0 15px;
`;

const ClearButton = styled(Button)`
  background-color: #f44336;
  margin-top: 10px;

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
    background-color: #f44336;
    border: none;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // Lista de tareas
  const [newTask, setNewTask] = useState(''); // Nueva tarea
  const [error, setError] = useState(''); // Mensaje de error

  // Función para agregar tarea
  const addTask = () => {
    if (newTask.trim() === '') {
      setError('La tarea no puede estar vacía.');
      return;
    }

    if (tasks.includes(newTask.trim())) {
      setError('Esta tarea ya existe en la lista.');
      return;
    }

    setTasks([...tasks, newTask.trim()]);
    setNewTask(''); // Limpiar el input
    setError(''); // Limpiar el mensaje de error
  };

  // Función para eliminar una tarea individual
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Función para borrar todas las tareas
  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <Container>
      <Title>To-Do List</Title>
      <InputContainer>
        <Input
          type="text"
          placeholder="Escribe una tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button onClick={addTask}>Agregar</Button>
      </InputContainer>
      {error && <ErrorText>{error}</ErrorText>} {/* Mostrar mensaje de error */}
      <TaskList>
        {tasks.map((task, index) => (
          <Task key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </Task>
        ))}
      </TaskList>
      {tasks.length > 0 && (
        <ClearButton onClick={clearAllTasks}>Borrar todas las tareas</ClearButton>
      )}
    </Container>
  );
};

export default TodoList;
