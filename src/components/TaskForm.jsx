import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import styled from "styled-components";

const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) {
      setError("No puedes agregar una tarea vacía");
      return;
    }

    dispatch(addTask({ id: Date.now(), text: taskText }));
    setTaskText("");
    setError("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <Button type="submit">➕ Agregar</Button>
      {error && <ErrorText>{error}</ErrorText>}
    </FormContainer>
  );
};

export default TaskForm;

// Styled Components
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
 

  &:hover {
    background: #0056b3;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;


