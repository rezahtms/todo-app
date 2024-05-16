"use client";
import {
  I_CompanyData,
  I_Tasks_Type,
  Todo_Context_Type,
  initialTodoContext,
} from "@/utils/types/pageTypes";
import React, { createContext, ReactNode, useState, useEffect } from "react";

export const TodoContext = createContext<Todo_Context_Type>(initialTodoContext);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todo, setTodo] = useState<I_CompanyData[]>([]);
  const [task, setTask] = useState<I_Tasks_Type[]>([]);

  // Fetching All Todo
  useEffect(() => {
    const controller = new AbortController();
    async function fetchCompaniesList() {
      try {
        const response = await fetch("http://localhost:8000/todo", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Something went wrong...");
        const data = await response.json();
        setTodo(data);
      } catch (error: any) {
        if (error.name !== "AbortError") console.error("Error:", error.message);
      }
    }

    fetchCompaniesList();
    return () => controller.abort();
  }, []);

  // Add New Company To Todo List
  const addNewCompany = async (newCompany: I_CompanyData) => {
    try {
      const response = await fetch("http://localhost:8000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCompany),
      });
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      setTodo((current) => [...current, data]);
    } catch (error) {
      console.error(error);
    }
  };

  // Adding New Task
  const addNewTask = (newTask: I_Tasks_Type) => {
    setTask((current) => [...current, newTask]);
  };

  // Update Todo Items
  const handleDragDrop = (id: string, dragDropStatus: string) => {
    setTask((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: dragDropStatus } : item
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todo: todo,
        addNewCompany: addNewCompany,
        addNewTask: addNewTask,
        task: task,
        handleDragDrop: handleDragDrop,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
