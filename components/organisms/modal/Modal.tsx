"use client";
import TaskInput from "@/components/atoms/taskInput/TaskInput";
import { Button, Dialog, FormLabel, Stack, Typography } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { TodoContext } from "@/contexts/TodoProvider";
import { I_Modal, I_Tasks_Type, initialNewTask } from "@/utils/types/pageTypes";

const Modal: FC<I_Modal> = (props) => {
  const { addNewTask } = useContext(TodoContext);
  const { openModal, setIsModal } = props;
  const [newTask, setNewTask] = useState<I_Tasks_Type>(initialNewTask);

  const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNewTask(newTask);
    setIsModal();
  };
  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newTasks = {
      id: Date.now().toString(),
      title: event.target.value,
      assigned: event.target.value,
      defined: event.target.value,
      status: "todo",
    };
    setNewTask({ ...newTasks });
  };

  return (
    <Dialog
      open={openModal}
      onClose={setIsModal}
      sx={{
        backgroundColor: "hsla(0, 0%, 25.49019607843137%, 0.308)",
        backdropFilter: "blur(3px)",
      }}
    >
      <form onSubmit={handleAddTask}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            backgroundColor: "hsla(0, 0%, 25.49019607843137%, 0.308)",
            backdropFilter: "blur(9px)",
            p: 1,
          }}
        >
          <Typography
            variant="h6"
            color="white"
            bgcolor="#0288d1"
            padding="0 4px"
            borderRadius="4px"
          >
            Adding Task
          </Typography>
          <TaskInput
            id="task-title"
            placeholder="Enter Task Title"
            name="title"
            autofocus
            onChange={changeHandler}
          />
          <TaskInput
            id="task-for"
            placeholder="Task For "
            name="assigned"
            onChange={changeHandler}
          />
          <FormLabel htmlFor="define-task">Define Task</FormLabel>
          <Textarea
            color="neutral"
            minRows={3}
            size="lg"
            placeholder="Define task"
            id="define-task"
            name="defined"
            onChange={changeHandler}
          />
          <Button type="submit" color="info" variant="contained">
            Add
          </Button>
        </Stack>
      </form>
    </Dialog>
  );
};

export default Modal;
