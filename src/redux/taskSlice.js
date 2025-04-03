import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [], 
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Evitar tareas repetidas
      if (state.tasks.some(task => task.text === action.payload.text)) {
        alert("La tarea ya existe.");
        return;
      }
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); 
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); 
    },
    clearTasks: (state) => {
      state.tasks = [];
      localStorage.removeItem("tasks"); 
    },
  },
});

export const { addTask, removeTask, clearTasks } = taskSlice.actions;
export default taskSlice.reducer;