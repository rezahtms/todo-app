import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { TodoContext } from "@/contexts/TodoProvider";
import DefinedTask from "@/components/molecules/definedTask/DefinedTask";
import { I_Tasks_Type, I_Todo_column } from "@/utils/types/pageTypes";

const ProgressTasks = () => {
  const { task, handleDragDrop } = useContext(TodoContext);
  const taskData: I_Tasks_Type[] = task || [];
  const TodoColumn: I_Todo_column[] = [
    {
      id: "1",
      columnTitle: "todo",
      addButton: true,
      todoList: taskData.filter((item) => item.status === "todo"),
    },
    {
      id: "2",
      columnTitle: "doing",
      addButton: false,
      todoList: taskData.filter((item) => item.status === "doing"),
    },
    {
      id: "3",
      columnTitle: "done",
      addButton: false,
      todoList: taskData.filter((item) => item.status === "done"),
    },
  ];

  const handleOnDrop = (id: string, title: string) => {
    handleDragDrop(id, title);
  };

  const handleDragOver = (id: string, status: string) => {
    handleDragDrop(id, status);
  };

  const handleDragLeave = (id: string, title: string) => {
    handleDragDrop(id, title);
  };

  const handleDragEnd = (id: string, title: string) => {
    handleDragDrop(id, title);
  };

  return (
    <Container sx={{ mt: 1, p: 1 }} maxWidth="xl">
      <Stack spacing={2} direction="row">
        {TodoColumn.map((todo, index) => (
          <div
            key={index}
            onDrop={(e) => {
              e.preventDefault();
              const taskId = e.dataTransfer.getData("text/plain");
              handleOnDrop(taskId, todo.columnTitle);
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <Box
              sx={{
                backgroundColor: "hsla(0, 0%, 25.49019607843137%, 0.308)",
                backdropFilter: "blur(9px)",
                p: 1,
                border: "1px solid rgba(65, 65, 65, 0.493)",
                borderRadius: 0.5,
                overflowY: "scroll",
                height: "80vh",
                width: "31vw",
                maxHeight: "100%",
              }}
            >
              <Typography variant="h4" color="#fff">
                {todo.columnTitle}
              </Typography>
              {todo.todoList.map((data, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData("text/plain", data.id);
                  }}
                  onDragOver={() => handleDragOver(data.id, data.status)}
                  onDragLeave={() => handleDragLeave(data.id, todo.columnTitle)}
                  onDragEnd={() =>
                    handleDragEnd(data.id, String(todo.columnTitle))
                  }
                >
                  <DefinedTask {...data} key={`Task-Data-${index}`} />
                </div>
              ))}
            </Box>
          </div>
        ))}
      </Stack>
    </Container>
  );
};

export default ProgressTasks;
